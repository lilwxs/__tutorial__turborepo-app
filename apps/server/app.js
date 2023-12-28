const express = require("express");
const createError = require("http-errors");

const app = express();

// Parse JSON requests
app.use(express.json());

// Handle root route
app.get("/", (req, res) => {
  res.json({ message: "REST API with Node.js, Express And PostgreSQL #1!" });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((error, req, res, next) => {
  // Set status code and message
  res.status(error.status || 500);
  res.json({ error: error.message });
});

module.exports = app;
