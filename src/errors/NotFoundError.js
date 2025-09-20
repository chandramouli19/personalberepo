const CustomError = require('./CustomError');

class NotFoundError extends CustomError {
  constructor(message = 'Resource not found') {
    super(404, message);
  }
}

module.exports = NotFoundError;
