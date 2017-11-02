require('dotenv').config({silent: true});

import * as logger from 'winston';

import Config from './lib/config';
import Utils from './lib/utils';
import WebUI from './lib/webui';
import Proxy from './lib/proxy';

async function Main() {
    const config = new Config().load();
    const utils = new Utils(config);

    await utils.initFolders();

    const proxy = new Proxy(config);
    await proxy.launch();

    const webui = new WebUI(config);
    await webui.launch();

    logger.info('App ready.');
}

try {
    Main();
} catch (e) {
    logger.error(e);
}