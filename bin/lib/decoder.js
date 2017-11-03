"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("winston");
const fs = require("mz/fs");
const utils_1 = require("./utils");
const deserializer_1 = require("./deserializer");
class Decoder {
    constructor(config, doNotHide = false) {
        this.config = config;
        this.doNotHide = doNotHide || config.ui.doNotHide;
        this.utils = new utils_1.default(config);
    }
    async decodeRequest(session, requestId, force = false) {
        try {
            if (!force && fs.existsSync(`data/${session}/${requestId}.req.json`)) {
                const data = await fs.readFile(`data/${session}/${requestId}.req.json`, 'utf8');
                return JSON.parse(data);
            }
            const content = await fs.readFile(`data/${session}/${requestId}.req.bin`, 'utf8');
            if (content.length === 0)
                return {};
            const data = JSON.parse(content);
            if (data.more && data.more.url === 'https://us.draconiusgo.com/serviceCall') {
                let boundary = data.more.headers['Content-Type'] || data.more.headers['content-type'];
                boundary = boundary.replace('multipart/form-data; boundary=', '').replace(/"/g, '');
                const parts = this.utils.parseMultipart(Buffer.from(data.data, 'base64'), boundary);
                const deserializer = new deserializer_1.default(parts.find(p => p.name === 'args').data);
                data.data = {
                    service: parts.find(p => p.name === 'service').data,
                    method: parts.find(p => p.name === 'method').data,
                    data: deserializer.deserialize(),
                };
            }
            await fs.writeFile(`data/${session}/${requestId}.req.json`, JSON.stringify(data, null, 2), 'utf8');
            return data;
        }
        catch (e) {
            logger.error(`Unable to parse file data/${session}/${requestId}.req.bin`);
            logger.error(e);
            return null;
        }
    }
    async decodeResponse(session, requestId, force = false) {
        try {
            if (!force && fs.existsSync(`data/${session}/${requestId}.res.json`)) {
                const data = await fs.readFile(`data/${session}/${requestId}.res.json`, 'utf8');
                return JSON.parse(data);
            }
            let raw = await fs.readFile(`data/${session}/${requestId}.res.bin`, 'utf8');
            if (raw[0] === '{'.charCodeAt(0))
                raw = JSON.parse(raw).data;
            const deserializer = new deserializer_1.default(Buffer.from(raw, 'base64'));
            const data = deserializer.deserialize();
            await fs.writeFile(`data/${session}/${requestId}.res.json`, JSON.stringify(data, null, 2), 'utf8');
            return data;
        }
        catch (e) {
            logger.error('Error decrypting response %s of session %s', requestId, session);
            logger.error(e);
            return { error: 'unable to decode response' };
        }
    }
    convertMapToArray(data) {
        if (data === null || data === undefined)
            return data;
        if (data instanceof Map) {
            let array = [];
            for (let [key, value] of data) {
                array.push({
                    key,
                    value,
                });
            }
            return array;
        }
        else if (typeof data === 'object' && data.__type) {
            for (let key in data) {
                data[key] = this.convertMapToArray(data[key]);
            }
            return data;
        }
        else if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                data[i] = this.convertMapToArray(data[i]);
            }
            return data;
        }
        else {
            return data;
        }
    }
}
exports.default = Decoder;
//# sourceMappingURL=decoder.js.map