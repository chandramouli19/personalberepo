const CustomError = require('../errors/CustomError');

function errorHandler(err, req, res, next) {
  console.error(err);  // log for debugging

  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err instanceof CustomError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === 'ValidationError') {
    // e.g. Joi or Mongoose validation error
    statusCode = 400;
    message = err.message;
  }
  // more cases as required

  res.status(statusCode).json({
    success: false,
    message
  });
}

module.exports = errorHandler;
