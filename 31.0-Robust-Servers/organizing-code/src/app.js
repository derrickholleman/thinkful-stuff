const express = require("express");
const app = express();
// required for http requests
app.use(express.json());
const morgan = require("morgan");
app.use(morgan("dev"));
const flips = require("./data/flips-data");
const counts = require("./data/counts-data");

// count
app.get("/counts/:countName", (req, res, next) => {
  const { countName } = req.params;
  const foundCount = counts[countName];
  if (foundCount !== undefined) {
    res.json({ data: foundCount });
  } else {
    // set error object for passing to error handler
    next({
      status: 404,
      message: `Count name not found: ${countName}`,
    });
  }
});

app.get("/counts", (req, res, next) => {
  res.json({ data: counts });
});

// flips
app.get("/flips/:flipId", (req, res, next) => {
  const { flipId } = req.params;
  const foundFlip = flips.find((flip) => flip.id === Number(flipId));

  if (foundFlip) {
    res.json({ data: foundFlip });
  } else {
    // set error object for passing to error handler
    next({
      status: 404,
      message: `Flip id not found: ${flipId}`,
    });
  }
});

app.get("/flips", (req, res) => {
  res.json({ data: flips });
});

// middleware to validate request body
function bodyHasResultProperty(req, res, next) {
  const { data: { result } = {} } = req.body;
  if (result) {
    next();
  } else {
    next({
      status: 400,
      message: "A 'result' property is required",
    });
  }
}

app.post("/flips", bodyHasResultProperty, (req, res, next) => {
  let lastFlipId = flips.reduce((maxId, flip) => Math.max(maxId, flip.id), 0);
  const { data: { result } = {} } = req.body;
  const newFlip = {
    id: ++lastFlipId,
    result,
  };
  flips.push(newFlip);
  counts[result] = counts[result] + 1;
  res.status(201).json({ data: newFlip });
});

// Not found handler
app.get("/favicon.ico", (req, res) => res.sendStatus(204));
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
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
