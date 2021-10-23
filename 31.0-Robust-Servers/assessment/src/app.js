const express = require("express");
const app = express();
app.use(express.json());

const urlsRouter = require("./urls/urls.router");
const usesRouter = require("./uses/uses.router");

app.use("/urls", urlsRouter);
app.use("/uses", usesRouter);

// error handling
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

app.use((error, req, res, next) => {
  console.error(error);
  // set default error status & message
  const { status = 500, message = "Something went wrong!" } = error;
  // send error status code and message in json format
  res.status(status).json({ error: message });
});

module.exports = app;
