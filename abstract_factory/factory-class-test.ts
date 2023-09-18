import { LoggerFactory } from './factory-class';

const logger = LoggerFactory.createLogger();

logger.debug('Debug message');
logger.info('Info message');
logger.warn('Warning message');
logger.error('Error message');
