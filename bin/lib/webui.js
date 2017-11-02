"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("winston");
const fs = require("mz/fs");
const _ = require("lodash");
const moment = require("moment");
const Bluebird = require("bluebird");
const decoder_js_1 = require("./decoder.js");
const utils_js_1 = require("./utils.js");
class WebUI {
    constructor(config) {
        this.config = config;
        this.decoder = new decoder_js_1.default(config);
        this.utils = new utils_js_1.default(config);
    }
    launch() {
        const config = this.config.ui;
        if (config.active) {
            const app = this.app = express();
            app.set('etag', false);
            app.use('/api*', function (req, res, next) {
                res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                res.header('Expires', '-1');
                res.header('Pragma', 'no-cache');
                next();
            });
            app.get('/api/config', _.bind(this.getConfig, this));
            app.get('/api/sessions', _.bind(this.getSessions, this));
            app.get('/api/session/:session', _.bind(this.getRequests, this));
            app.get('/api/request/:session/:request', _.bind(this.decodeRequest, this));
            app.get('/api/response/:session/:request', _.bind(this.decodeResponse, this));
            this.app.get('/logout', function (req, res) {
                req.logout();
                res.redirect('/');
            });
            app.use(express.static('webui'));
            app.listen(config.port, () => {
                logger.info('UI started, port %s.', config.port);
            });
        }
        else {
            logger.info('UI deactivated.');
        }
    }
    async getConfig(req, res, next) {
        return res.json({
            auth: this.config.ui.auth.active,
            ga: this.config.ui.ga.key,
        });
    }
    async getSessions(req, res, next) {
        logger.info('Getting sessions.');
        try {
            const folders = await this.utils.getSessionFolders();
            const data = await Bluebird.map(folders, async (folder) => {
                const info = {
                    id: folder,
                    title: moment(folder, 'YYYYMMDD.HHmmss').format('DD MMM YY - HH:mm:ss'),
                };
                if (fs.existsSync(`data/${folder}/.info`)) {
                    const content = await fs.readFile(`data/${folder}/.info`, 'utf8');
                    info.title += ' ' + content;
                }
                return info;
            });
            return res.json(data);
        }
        catch (e) {
            logger.error(e);
            res.status(500).send(e);
        }
    }
    async getRequests(req, res, next) {
        logger.info('Getting requests for session %s', req.params.session);
        try {
            let files = await fs.readdir(`data/${req.params.session}`);
            files = _.sortBy(_.filter(files, d => _.endsWith(d, '.req.bin')));
            const force = !this.config.ui.cachejson;
            const infos = await Bluebird.map(files, async (file) => {
                const requestid = _.trimEnd(file, '.req.bin');
                const data = await this.decoder.decodeRequest(req.params.session, requestid, force);
                let title = '';
                if (data.more && data.more.url) {
                    if (data.more.url === 'https://us.draconiusgo.com/serviceCall') {
                        title = data.data.service + '/' + data.data.method;
                    }
                    else if (data.more.url.indexOf('facebook.com') > 0) {
                        title = 'facebook';
                    }
                    else if (data.more.url.indexOf('cloud.unity3d.com') > 0) {
                        title = 'cloud.unity3d.com';
                    }
                    else if (data.more.url.indexOf('mobileapptracking.com') > 0) {
                        title = 'mobileapptracking';
                    }
                    else if (data.more.url.indexOf('maps.draconiusgo.com') > 0) {
                        title = 'maps';
                    }
                    else if (data.more.url === 'https://us.draconiusgo.com/ping') {
                        title = 'ping';
                    }
                    else {
                        title = data.more.host;
                    }
                }
                return {
                    coords: { lat: 0, lng: 0 },
                    file: {
                        id: requestid,
                        title,
                        when: data.when,
                    }
                };
            });
            const result = {
                title: '',
                files: infos.map(info => info.file),
                steps: _.filter(infos.map(info => info.coords), coord => coord.lat || coord.lng),
            };
            if (fs.existsSync(`data/${req.params.session}/.info`)) {
                const info = await fs.readFile(`data/${req.params.session}/.info`, 'utf8');
                result.title = info;
            }
            return res.json(result);
        }
        catch (e) {
            logger.error(e);
            res.status(500).send(e);
        }
    }
    async decodeRequest(req, res, next) {
        logger.info('Decrypting session %d, request %s', req.params.session, req.params.request);
        try {
            const force = !this.config.ui.cachejson;
            const data = await this.decoder.decodeRequest(req.params.session, req.params.request, force);
            return res.json({
                info: data.more,
                data: data.data,
            });
        }
        catch (e) {
            logger.error(e);
            return res.status(500).send(e);
        }
    }
    async decodeResponse(req, res, next) {
        logger.info('Decrypting session %d, response %s', req.params.session, req.params.request);
        try {
            const force = !this.config.ui.cachejson;
            const data = await this.decoder.decodeResponse(req.params.session, req.params.request, force);
            return res.json(data);
        }
        catch (e) {
            logger.error(e);
            return res.status(500).send(e);
        }
    }
}
exports.default = WebUI;
//# sourceMappingURL=webui.js.map