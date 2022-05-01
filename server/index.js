
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./src/routes');
const config = require('./src/config');

// Initialize the express server app
const app = express();

// Setup CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
  next();
});

// Log all calls to the API
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`);
  next();
});

app.use(express.json())

console.log('Trying to connect to database...');
console.log(config.database);
mongoose.connect(config.database, config.mongoConfig, err => {
  if (err) {
    console.log("Could not connect to database.");
    console.log(err);
  } else {
      console.log(`Connected to ${process.env.DB_NAME}.`);
  }
});

// Import and use defined API routes
app.use('', routes);

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`
    Application listening on PORT: ${PORT}
    http://localhost:${PORT}
  `);
});

// Export the server app
module.exports = app;
