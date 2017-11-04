import * as logger from 'winston';
import * as fs from 'mz/fs';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as Wreck from 'wreck';
import * as Subtext from 'subtext';

import Config from './config';
import Utils from './utils';
import Deserializer from './deserializer';

export default class Decoder {
    config: any;
    altProtos: any;
    doNotHide: boolean;
    utils: Utils;

    constructor(config, doNotHide = false) {
        this.config = config;
        this.doNotHide = doNotHide || config.ui.doNotHide;
        this.utils = new Utils(config);
    }

    async decodeRequest(session: string, requestId: string, force = false): Promise<any> {
        try {
            if (!force && fs.existsSync(`data/${session}/${requestId}.req.json`)) {
                const data = await fs.readFile(`data/${session}/${requestId}.req.json`, 'utf8');
                return JSON.parse(data);
            }

            const content = await fs.readFile(`data/${session}/${requestId}.req.bin`, 'utf8');
            if (content.length === 0)  return {};

            const data = JSON.parse(content);
            if (data.more && data.more.url === 'https://us.draconiusgo.com/serviceCall') {
                const request = Wreck.toReadableStream(Buffer.from(data.data, 'base64'));
                request.headers = data.more.headers;
                const { payload } = await Subtext.parse(request, null, { parse: true, output: 'data' });

                const deserializer = new Deserializer(payload.args);
                data.data = {
                    service: payload.service,
                    method: payload.method,
                    data: deserializer.deserialize(),
                };
            }

            await fs.writeFile(`data/${session}/${requestId}.req.json`, JSON.stringify(data, null, 2), 'utf8');

            return data;
        } catch (e) {
            logger.error(`Unable to parse file data/${session}/${requestId}.req.bin`);
            logger.error(e);
            return null;
        }
    }

    async decodeResponse(session: string, requestId: string, force = false): Promise<any> {
        try {
            if (!force && fs.existsSync(`data/${session}/${requestId}.res.json`)) {
                const data = await fs.readFile(`data/${session}/${requestId}.res.json`, 'utf8');
                return JSON.parse(data);
            }
            let raw = await fs.readFile(`data/${session}/${requestId}.res.bin`, 'utf8');
            if (raw[0] === '{'.charCodeAt(0)) raw = JSON.parse(raw).data;
            const deserializer = new Deserializer(Buffer.from(raw, 'base64'));
            const data = deserializer.deserialize();

            await fs.writeFile(`data/${session}/${requestId}.res.json`, JSON.stringify(data, null, 2), 'utf8');

            return data;

        } catch (e) {
            logger.error('Error decrypting response %s of session %s', requestId, session);
            logger.error(e);
            return {error: 'unable to decode response'};
        }
    }

    convertMapToArray(data: any) {
        if (data === null || data === undefined) return data;
        if (data instanceof Map) {
            const array = [];
            for (const [key, value] of data) {
                array.push({
                    key,
                    value,
                });
            }
            return array;
        } else if (typeof data === 'object' && data.__type) {
            for (const key in data) {
                data[key] = this.convertMapToArray(data[key]);
            }
            return data;
        } else if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                data[i] = this.convertMapToArray(data[i]);
            }
            return data;
        } else {
            return data;
        }
    }
}
