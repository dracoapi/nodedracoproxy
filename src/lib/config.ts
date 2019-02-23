import * as fs from 'fs';
import * as _ from 'lodash';
import * as moment from 'moment';

import { logger } from './logger';

const yaml = require('js-yaml');

const config = {
  reqId: 0,
  proxy: {
    port: 8888
  },
  ui: {
    active: true,
    port: process.env.WEBUI_PORT || 8080,
    auth: {
      active: false,
      users: []
    },
    ga: {
      key: 'UA-108458756-1'
    }
  },
  export: {
    csv: {
      separator: ','
    }
  },
  logger: {
    level: 'info'
  },
  data: 'data'
};

export default class Config {
  load(): any {
    let loaded = null;
    try {
      if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
      }

      if (!fs.existsSync('config/config.yaml')) {
        logger.info(
          'Config file not found in config/config.yaml, using default.'
        );
        loaded = config;
      } else {
        logger.info('Loading config/config.yaml');
        const content = fs.readFileSync('config/config.yaml', 'utf8');
        loaded = yaml.safeLoad(content);
        loaded = _.defaultsDeep(loaded, config);
      }
    } catch (e) {
      logger.error(e.message);
      logger.error(e.toString());
    }

    return loaded;
  }
}
