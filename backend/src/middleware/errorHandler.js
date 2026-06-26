import logger from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  logger.error({
    msg: message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    statusCode,
  });

  res.status(statusCode).json({
    success: false,
    timestamp: new Date().toISOString(),
    message: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
};
