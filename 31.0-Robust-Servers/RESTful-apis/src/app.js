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
  // need undefined because count could be zero which is valid but a falsy value
  if (foundCount !== undefined) {
    res.json({ data: foundCount });
  } else {
    next(`Count name not found: ${countName}`);
  }
});

app.get("/counts", (req, res, next) => {
  // sending counts with the alias "data"
  res.json({ data: counts });
});

// flips
app.get("/flips/:flipId", (req, res, next) => {
  const { flipId } = req.params;
  const foundFlip = flips.find((flip) => flip.id === Number(flipId));

  if (foundFlip) {
    res.json({ data: foundFlip });
  } else {
    next(`Flip id not found: ${flipId}`);
  }
});

app.get("/flips", (req, res) => {
  // sending flips with the alias "data"
  res.json({ data: flips });
});

// Variable to hold the next ID
// Because some IDs may already be used, find the largest assigned ID
let lastFlipId = flips.reduce((maxId, flip) => Math.max(maxId, flip.id), 0);

app.post("/flips", (req, res, next) => {
  const { data: { result } = {} } = req.body;
  if (result) {
    const newFlip = {
      id: ++lastFlipId, // Increment last ID, then assign as the current ID
      result,
    };
    flips.push(newFlip);
    counts[result] = counts[result] + 1; // Increment the counts

    // creating flip status code
    res.status(201).json({ data: newFlip });
  } else {
    res.sendStatus(400)
  }
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
