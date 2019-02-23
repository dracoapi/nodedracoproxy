"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("mz/fs");
const _ = require("lodash");
const moment = require("moment");
const HttpsProxyAgent = require("https-proxy-agent");
const mitmproxy = require('http-mitm-proxy');
const utils_1 = require("./utils");
const logger_1 = require("./logger");
const endpoints = {
    api: 'us.draconiusgo.com'
};
class MitmProxy {
    constructor(config) {
        this.config = config;
        this.utils = new utils_1.default(config);
    }
    async launch() {
        const config = this.config;
        const ip = (config.ip = this.utils.getIp());
        logger_1.logger.info(`Proxy listening at ${ip}:${config.proxy.port}`);
        logger_1.logger.info(`Proxy config url available at http://${ip}:${config.proxy.port}/proxy.pac`);
        this.proxy = mitmproxy()
            .use(mitmproxy.gunzip)
            .onError(_.bind(this.onError, this))
            .onRequest(_.bind(this.onRequest, this))
            .listen({ port: config.proxy.port, silent: true });
    }
    async onRequest(context, callback) {
        const config = this.config;
        const host = context.clientToProxyRequest.headers.host;
        const endpoint = _.findKey(endpoints, endpoint => endpoint === host);
        if (host === `${config.ip}:${config.proxy.port}` ||
            (config.proxy.hostname && _.startsWith(host, config.proxy.hostname))) {
            const res = context.proxyToClientResponse;
            if (_.startsWith(context.clientToProxyRequest.url, '/proxy.pac')) {
                // get proxy.pac
                logger_1.logger.info('Get proxy.pac');
                let data = await fs.readFile('templates/proxy.pac', 'utf8');
                if (_.endsWith(host, '.ngrok.io')) {
                    data = data.replace(/##PROXY##/g, host + ':80');
                }
                else {
                    data = data.replace(/##PROXY##/g, host);
                }
                res.writeHead(200, {
                    'Content-Type': 'application/x-ns-proxy-autoconfig',
                    'Content-Length': data.length
                });
                res.end(data, 'utf8');
            }
            else if (_.startsWith(context.clientToProxyRequest.url, '/cert')) {
                // get cert
                logger_1.logger.info('Get certificate');
                const path = this.proxy.sslCaDir + '/certs/ca.pem';
                const data = await fs.readFile(path);
                res.writeHead(200, {
                    'Content-Type': 'application/x-x509-ca-cert',
                    'Content-Length': data.length
                });
                res.end(data, 'binary');
            }
            else {
                logger_1.logger.info('Incorrect request');
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
                    }
                    else if (!this.config.proxy.onlyApi) {
                        await this.simpleDumpRequest(requestId, ctx, buffer, url);
                    }
                }
                catch (e) {
                    logger_1.logger.error(e);
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
                    }
                    else if (!this.config.proxy.onlyApi) {
                        await this.simpleDumpResponse(requestId, ctx, buffer);
                    }
                }
                catch (e) {
                    logger_1.logger.error(e);
                }
                ctx.proxyToClientResponse.write(buffer);
                callback(false);
            });
            callback();
        }
        else {
            logger_1.logger.debug(`unhandled: ${host}${context.clientToProxyRequest.url}`);
            if (config.proxy.chainproxy) {
                context.proxyToServerRequestOptions.agent = new HttpsProxyAgent(config.proxy.chainproxy);
            }
            callback();
        }
    }
    async simpleDumpRequest(id, ctx, buffer, url) {
        logger_1.logger.debug(`Dumping request to ${url}`);
        const data = {
            id,
            when: +moment(),
            endpoint: url,
            more: {
                url,
                headers: ctx.proxyToServerRequest._headers
            },
            data: buffer.toString('base64')
        };
        await fs.writeFile(`${this.config.datadir}/${id}.req.bin`, JSON.stringify(data, null, 4), 'utf8');
    }
    async simpleDumpResponse(id, ctx, buffer) {
        await fs.writeFile(`${this.config.datadir}/${id}.res.bin`, buffer.toString('base64'), 'utf8');
    }
    async handleApiRequest(id, ctx, buffer, url) {
        logger_1.logger.info('Api request: %s', url);
        const data = {
            id,
            when: +moment(),
            endpoint: url,
            more: {
                url,
                headers: ctx.proxyToServerRequest._headers
            },
            data: buffer.toString('base64')
        };
        await fs.writeFile(`${this.config.datadir}/${id}.req.bin`, JSON.stringify(data, null, 4), 'utf8');
    }
    async handleApiResponse(id, ctx, buffer) {
        await fs.writeFile(`${this.config.datadir}/${id}.res.bin`, buffer.toString('base64'), 'utf8');
    }
    onError(ctx, err) {
        logger_1.logger.error('Proxy error: ', err);
    }
}
exports.default = MitmProxy;
//# sourceMappingURL=proxy.js.map