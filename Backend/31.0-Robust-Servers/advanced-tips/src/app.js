const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const flipsRouter = require("./flips/flips.router");
const countsRouter = require("./counts/counts.router");

// required for http requests
app.use(express.json());

app.use("/counts", countsRouter);
app.use("/flips", flipsRouter);

// Not found handler
app.get("/favicon.ico", (req, res) => res.sendStatus(204));
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  // set default error status & message
  const { status = 500, message = "Something went wrong!" } = error;
  // send error status code and message in json format
  res.status(status).json({ error: message });
});

module.exports = app;
