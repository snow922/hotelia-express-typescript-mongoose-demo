import pino from 'pino';

const logger = pino({
  name: process.env.APP_ID || 'hotelia-express',
  level: process.env.LOG_LEVEL || 'debug',
});

export default logger;
