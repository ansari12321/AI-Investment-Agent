import logger from '../utils/logger.js';

export const validateRequest = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    logger.warn({ msg: 'Validation failed', errors: error.errors });
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: error.errors,
    });
  }
};
