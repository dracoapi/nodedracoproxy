"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("winston");
const fs = require("mz/fs");
const Wreck = require("wreck");
const Subtext = require("subtext");
const long = require("long");
const querystring = require("querystring");
const utils_1 = require("./utils");
const deserializer_1 = require("../draco/deserializer");
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
                const request = Wreck.toReadableStream(Buffer.from(data.data, 'base64'));
                request.headers = data.more.headers;
                const { payload } = await Subtext.parse(request, null, { parse: true, output: 'data' });
                const version = request.headers['protocol-version'];
                const deserializer = new deserializer_1.default(version, payload.args);
                data.data = {
                    service: payload.service,
                    method: payload.method,
                    data: deserializer.deserialize(),
                };
            }
            else if (data.more && data.more.url === 'https://us.draconiusgo.com/client-error') {
                data.data = querystring.parse(Buffer.from(data.data, 'base64').toString());
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
            const request = await this.decodeRequest(session, requestId, false);
            const version = request ? request.more.headers['protocol-version'] : null;
            let raw = await fs.readFile(`data/${session}/${requestId}.res.bin`, 'utf8');
            if (raw[0] === '{'.charCodeAt(0))
                raw = JSON.parse(raw).data;
            const deserializer = new deserializer_1.default(version, Buffer.from(raw, 'base64'));
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
    prettify(data) {
        if (data === null || data === undefined)
            return data;
        if (data instanceof Map) {
            const array = [];
            for (const [key, value] of data) {
                array.push({
                    key,
                    value: this.prettify(value),
                });
            }
            return array;
        }
        else if (data instanceof long) {
            return data.toString();
        }
        else if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                data[i] = this.prettify(data[i]);
            }
            return data;
        }
        else if (data instanceof Buffer) {
            return data.toString('base64');
        }
        else if (typeof data === 'object') {
            for (const key in data) {
                data[key] = this.prettify(data[key]);
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