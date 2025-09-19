// config/db.js
const mongoose = require('mongoose');
const config = require('./config');  // Importing the config file

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); 
  }
};

module.exports = connectDB;
