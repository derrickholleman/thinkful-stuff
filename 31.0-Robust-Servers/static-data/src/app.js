const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const flips = require("./data/flips-data");
const counts = require("./data/counts-data");

// count
app.use("/counts/:countName", (req, res, next) => {
  const { countName } = req.params;
  const foundCount = counts[countName];
  // need undefined because count could be zero which is valid but a falsy value
  if (foundCount !== undefined) {
    res.json({ data: foundCount });
  } else {
    next(`Count name not found: ${countName}`);
  }
});

app.use("/counts", (req, res, next) => {
  res.json({ data: counts });
});

// flips
app.use("/flips/:flipId", (req, res, next) => {
  const { flipId } = req.params;
  const foundFlip = flips.find((flip) => flip.id === Number(flipId));

  if (foundFlip) {
    res.json({ data: foundFlip });
  } else {
    next(`Flip id not found: ${flipId}`);
  }
});

app.use("/flips", (req, res) => {
  res.json({ data: flips });
});

// Not found handler
app.get("/favicon.ico", (req, res) => res.sendStatus(204));
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

module.exports = app;
