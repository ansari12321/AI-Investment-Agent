import pino from 'pino';
import pinoPretty from 'pino-pretty';

const logger = pino(
  {
    level: process.env.LOG_LEVEL || 'info',
    base: { pid: false },
  },
  pinoPretty({
    colorize: true,
    translateTime: 'SYS:standard',
    ignore: 'hostname',
  })
);

export default logger;
