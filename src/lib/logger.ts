const winston = require('winston');
const formatDate = require('date-fns/format');

const log = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.json(),
    winston.format.timestamp()
  ),
  transports: [
    new winston.transports.File({
      filename: 'data/error.log',
      level: 'error'
    }),
    new winston.transports.File({ filename: 'data/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  log.add(
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.timestamp({
          format: () => formatDate(new Date(), 'HH:mm:ss')
        }),
        winston.format.printf(
          info => `[${info.timestamp}] ${info.level}: ${info.message}`
        )
      )
    })
  );
}

export const logger = log;
