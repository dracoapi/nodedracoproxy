import * as os from 'os';
import * as path from 'path';
import * as fs from 'mz/fs';
import * as moment from 'moment';
import * as _ from 'lodash';
import * as Bluebird from 'bluebird';

import Config from './config';

export default class Utils {
    config: any;

    constructor(config) {
        this.config = config;
    }

    getIp(): string {
        // typing is bad but I can't find a way to make it works
        const ipv4: any = _(os.networkInterfaces())
                .filter((i, name) => !/(loopback|vmware|internal)/gi.test(name))
                .flatten().filter(ip => !(<any>ip).internal && (<any>ip).family === 'IPv4').first();
        return ipv4.address;
    }

    async initFolders() {
        await this.cleanDataFolders();
        await this.createCurrentFolder();
    }

    async createCurrentFolder() {
        this.config.datadir = path.join(this.config.data, moment().format('YYYYMMDD.HHmmss'));
        await fs.mkdir(this.config.datadir);
    }

    async getSessionFolders(): Promise<string[]> {
        const content = await fs.readdir(this.config.data);
        const files = await Bluebird.filter(content, async file => {
            const stat = await fs.stat(path.join(this.config.data, file));
            return stat.isDirectory() && !file.startsWith('.');
        });
        return _.sortBy(files);
    }

    async cleanDataFolders(): Promise<void> {
        try {
            await fs.mkdir(this.config.data);
        } catch (e) {
        }

        let folders = await this.getSessionFolders();
        folders = await Bluebird.filter(folders, async dir => {
            const content = await fs.readdir(path.join(this.config.data, dir));
            return content.length === 0;
        });

        await Bluebird.map(folders, async dir => {
            await fs.rmdir(path.join(this.config.data, dir));
        });
    }

    async wait(ms: number) {
        return new Promise(function(resolve) {
            setTimeout(resolve, ms);
        });
    }

    parseMultipart(data: Buffer, boundary: string) {
        const parts = [];
        let state = 0;
        let lastline = '';
        let contenttype = '';
        let disposition = '';
        let buffer = [];
        for (let i = 0; i < data.length; i++) {
            const oneByte = data[i];
            const prevByte = i > 0 ? data[i - 1] : null;
            const newLineDetected = ((oneByte === 0x0a) && (prevByte === 0x0d)) ? true : false;
            const newLineChar = ((oneByte === 0x0a) || (oneByte === 0x0d)) ? true : false;
            if (!newLineChar) lastline += String.fromCharCode(oneByte);
            if (newLineDetected) {
                if (state === 0) {
                    // find next part
                    if ('--' + boundary === lastline) {
                        state = 1;
                    }
                } else if (state === 1) {
                    // find content type
                    state = 2;
                    contenttype = lastline;
                } else if (state === 2) {
                    // find content disposition
                    state = 3;
                    disposition = lastline;
                } else if (state === 3) {
                    // empty line
                    state = 4;
                    buffer = [];
                } else if (state === 5) {
                    state = 1;
                }
                lastline = '';
                continue;
            }
            if (state === 4) {
                if (lastline.length > (boundary.length + 4)) lastline = ''; // mem save
                if (('--' + boundary) === lastline) {
                    const end = buffer.length - lastline.length;
                    const raw = buffer.slice(0, end);
                    let name = disposition.replace('Content-disposition: form-data; name="', '');
                    name = name.substring(0, name.indexOf('"'));
                    const part = { name, data: undefined };
                    if (contenttype.indexOf('text/plain') > 0) {
                        part.data = new Buffer(raw).toString('utf8');
                    } else {
                        part.data = new Buffer(raw);
                    }
                    parts.push(part);
                    buffer = []; lastline = ''; state = 5; contenttype = ''; disposition = '';
                } else {
                    buffer.push(oneByte);
                }
                if (newLineDetected) lastline = '';
            }
        }
        return parts;
    }
}
