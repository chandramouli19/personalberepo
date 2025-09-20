require('dotenv').config();  // Loads environment variables from .env

module.exports = {
  dbURI: process.env.DB_URI || 'mongodb://localhost:27017/mydatabase', // Default to local DB if not set
  port: process.env.PORT || 5000,  // Default port
//   secretKey: process.env.SECRET_KEY || 'defaultsecretkey',
};


