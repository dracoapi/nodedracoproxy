import * as logger from 'winston';
import * as fs from 'mz/fs';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as multipart from 'parse-multipart';

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
        if (!force && fs.existsSync(`data/${session}/${requestId}.req.json`)) {
            const data = await fs.readFile(`data/${session}/${requestId}.req.json`, 'utf8');
            return JSON.parse(data);
        }

        const content = await fs.readFile(`data/${session}/${requestId}.req.bin`, 'utf8');
        if (content.length === 0)  return {};

        const data = JSON.parse(content);
        if (data.more && data.more.url === 'https://us.draconiusgo.com/serviceCall') {
            let boundary = data.more.headers['Content-Type'] || data.more.headers['content-type'];
            boundary = boundary.replace('multipart/form-data; boundary=', '').replace(/"/g, '');
            const parts = this.utils.parseMultipart(Buffer.from(data.data, 'base64'), boundary);
            const deserializer = new Deserializer(parts.find(p => p.name === 'args').data);
            data.data = {
                service: parts.find(p => p.name === 'service').data,
                method: parts.find(p => p.name === 'method').data,
                data: deserializer.deserialize(),
            };
        }

        await fs.writeFile(`data/${session}/${requestId}.req.json`, JSON.stringify(data, null, 2), 'utf8');

        return data;
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
}
