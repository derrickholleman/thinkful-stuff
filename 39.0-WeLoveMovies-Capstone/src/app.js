if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const moviesRouter = require("./movies/movies.router");

app.use("/movies", moviesRouter);

// Not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// General Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
