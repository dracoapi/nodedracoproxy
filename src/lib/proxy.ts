import { Socket } from 'net';
import * as logger from 'winston';
import * as fs from 'mz/fs';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as HttpsProxyAgent from 'https-proxy-agent';

const mitmproxy = require('http-mitm-proxy');

import Utils from './utils';
import MyCerts from './certs';
import Decoder from './decoder';

const endpoints = {
    api: 'us.draconiusgo.com',
};

export default class MitmProxy {
    config: any;
    utils: Utils;
    proxy: any;
    mycerts: MyCerts;
    decoder: Decoder;

    constructor(config) {
        this.config = config;
        this.utils = new Utils(config);
        this.decoder = new Decoder(config);
    }

    async launch() {
        const config = this.config;
        if (config.proxy.active) {
            const ip = config.ip = this.utils.getIp();
            logger.info('Proxy listening at %s:%s', ip, config.proxy.port);
            logger.info('Proxy config url available at http://%s:%s/proxy.pac', ip, config.proxy.port);

            this.proxy = mitmproxy()
                .use(mitmproxy.gunzip)
                .use(mitmproxy.wildcard)
                .onError(_.bind(this.onError, this))
                .onRequest(_.bind(this.onRequest, this))
                .onConnect(_.bind(this.onConnect, this))
                .listen({ port: config.proxy.port, silent: true/*, forceChunkedRequest: true, forceSNI: true*/ });

            this.proxy.onCertificateMissing = _.bind(this.onCertificateMissing, this);
            this.proxy.onCertificateRequired = _.bind(this.onCertificateRequired, this);
        } else {
            logger.info('Proxy deactivated.');
        }
    }

    onCertificateRequired(hostname, callback) {
        if (!this.mycerts) {
            this.mycerts = new MyCerts();
        }
        this.mycerts.myCertGenerator(this.proxy.ca, hostname, (certPEM, privateKeyPEM) => {
            callback(null, {
                certFileData: certPEM,
                keyFileData: privateKeyPEM,
                hostname,
            });
        });
        return this.proxy;
    }

    onCertificateMissing(ctx, files, callback) {
        const hosts = files.hosts || [ctx.hostname];
        if (!this.mycerts) {
            this.mycerts = new MyCerts();
        }
        this.mycerts.myCertGenerator(this.proxy.ca, hosts, (certPEM, privateKeyPEM) => {
            callback(null, {
                certFileData: certPEM,
                keyFileData: privateKeyPEM,
                hosts,
            });
        });
        return this.proxy;
    }

    async onConnect(req, socket: Socket, head, callback) {
        var host = req.url.split(":")[0];
        var port = req.url.split(":")[1];

        const endpoint = _.findKey(endpoints, endpoint => endpoint === host);
        if (!endpoint) {
            logger.info('Tunnel to', req.url);
            const conn = new Socket();
            conn.connect(port, host, function () {
                socket.write('HTTP/' + req.httpVersion + ' 200 OK\r\n\r\n', 'UTF-8', function () {
                    conn.pipe(socket);
                    socket.pipe(conn);
                })
            });
            conn.on("error", function (e) {
                logger.error('Tunnel error', e);
            });
        }
        else {
            return callback();
        }
    }

    async onRequest(context, callback) {
        const config = this.config;
        const host = context.clientToProxyRequest.headers.host;
        const endpoint = _.findKey(endpoints, endpoint => endpoint === host);
        if (host === `${config.ip}:${config.proxy.port}` || (config.proxy.hostname && _.startsWith(host, config.proxy.hostname))) {
            const res = context.proxyToClientResponse;
            if (_.startsWith(context.clientToProxyRequest.url, '/proxy.pac')) {
                // get proxy.pac
                logger.info('Get proxy.pac');
                let data = await fs.readFile('templates/proxy.pac', 'utf8');
                if (_.endsWith(host, '.ngrok.io')) {
                    data = data.replace(/##PROXY##/g, host + ':80');
                } else {
                    data = data.replace(/##PROXY##/g, host);
                }
                res.writeHead(200, { 'Content-Type': 'application/x-ns-proxy-autoconfig', 'Content-Length': data.length });
                res.end(data, 'utf8');
            } else if (_.startsWith(context.clientToProxyRequest.url, '/cert')) {
                // get cert
                logger.info('Get certificate');
                const path = this.proxy.sslCaDir + '/certs/ca.pem';
                const data = await fs.readFile(path);
                res.writeHead(200, { 'Content-Type': 'application/x-x509-ca-cert', 'Content-Length': data.length });
                res.end(data, 'binary');
            } else {
                logger.info('Incorrect request');
                res.end('what?', 'utf8');
            }
        }
        else if (endpoint) {
            const requestChunks = [];
            const responseChunks = [];

            if (config.proxy.chainproxy) {
                context.proxyToServerRequestOptions.agent = new HttpsProxyAgent(config.proxy.chainproxy);
            }

            const id = ++this.config.reqId;
            const requestId = _.padStart(id.toString(), 5, '0');

            context.onRequestData((ctx, chunk, callback) => {
                requestChunks.push(chunk);
                return callback(null, null);
            });

            context.onRequestEnd(async (ctx, callback) => {
                const buffer = Buffer.concat(requestChunks);
                let url = (context.isSSL ? 'https' : 'http') + '://';
                url += ctx.clientToProxyRequest.headers.host;
                url += ctx.clientToProxyRequest.url;

                try {
                    if (endpoint === 'api') {
                        await this.handleApiRequest(requestId, ctx, buffer, url);
                    } else if (!this.config.proxy.onlyApi) {
                        await this.simpleDumpRequest(requestId, ctx, buffer, url);
                    }
                } catch (e) {
                    logger.error(e);
                }

                ctx.proxyToServerRequest.write(buffer);
                callback();
            });

            context.onResponseData((ctx, chunk, callback) => {
                responseChunks.push(chunk);
                return callback();
            });

            context.onResponseEnd(async (ctx, callback) => {
                const buffer = Buffer.concat(responseChunks);
                try {
                    if (endpoint === 'api') {
                        await this.handleApiResponse(requestId, ctx, buffer);
                    } else if (!this.config.proxy.onlyApi) {
                        await this.simpleDumpResponse(requestId, ctx, buffer);
                    }
                } catch (e) {
                    logger.error(e);
                }

                ctx.proxyToClientResponse.write(buffer);
                callback(false);
            });

            callback();
        }
        else {
            logger.debug('unhandled: %s%s', host, context.clientToProxyRequest.url);
            if (config.proxy.chainproxy) {
                context.proxyToServerRequestOptions.agent = new HttpsProxyAgent(config.proxy.chainproxy);
            }

            callback();
        }
    }

    async simpleDumpRequest(id, ctx, buffer: Buffer, url: string) {
        logger.debug('Dumping request to %s', url);
        const data = {
            id,
            when: +moment(),
            endpoint: url,
            more: {
                url,
                headers: ctx.proxyToServerRequest._headers,
            },
            data: buffer.toString('base64'),
        };
        await fs.writeFile(`${this.config.datadir}/${id}.req.bin`, JSON.stringify(data, null, 4), 'utf8');
    }

    async simpleDumpResponse(id, ctx, buffer: Buffer) {
        await fs.writeFile(`${this.config.datadir}/${id}.res.bin`, buffer.toString('base64'), 'utf8');
    }

    async handleApiRequest(id, ctx, buffer: Buffer, url) {
        logger.info('Api request: %s', url);
        const data = {
            id,
            when: +moment(),
            endpoint: url,
            more: {
                url,
                headers: ctx.proxyToServerRequest._headers,
            },
            data: buffer.toString('base64'),
        };
        await fs.writeFile(`${this.config.datadir}/${id}.req.bin`, JSON.stringify(data, null, 4), 'utf8');
    }

    async handleApiResponse(id, ctx, buffer: Buffer) {
        await fs.writeFile(`${this.config.datadir}/${id}.res.bin`, buffer.toString('base64'), 'utf8');
    }

    onError(ctx, err, errorKind) {
        // ctx may be null
        var url = (ctx && ctx.clientToProxyRequest) ? ctx.clientToProxyRequest.url : "";
        logger.error('Proxy error: ' + errorKind + ' on ' + url + ':', err);
    }
}
