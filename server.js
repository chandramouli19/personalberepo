// server.js
const express = require('express');
const connectDB = require('./config/db');  // Importing DB connection logic
const userRoutes = require('./src/routes/basicinfoController');
const listEndpoints = require('express-list-endpoints');

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to DB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.table(listEndpoints(app));
});
