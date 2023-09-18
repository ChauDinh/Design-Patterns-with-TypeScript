import { createLogger } from './factory-function';

const logger = createLogger();

logger.debug('Debug message');
logger.error('Error message');
logger.info('Info message');
logger.warn('Warning message');
