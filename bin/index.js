"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ silent: true });
const logger = require("winston");
const config_1 = require("./lib/config");
const utils_1 = require("./lib/utils");
const webui_1 = require("./lib/webui");
const proxy_1 = require("./lib/proxy");
async function Main() {
    const config = new config_1.default().load();
    const utils = new utils_1.default(config);
    await utils.initFolders();
    const proxy = new proxy_1.default(config);
    await proxy.launch();
    const webui = new webui_1.default(config);
    await webui.launch();
    logger.info('App ready.');
}
try {
    Main();
}
catch (e) {
    logger.error(e);
}
//# sourceMappingURL=index.js.map