const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

app.get("/check/:zip", validateZip, (req, res, next) => {
  const { zip } = req.params;
  if (getZoos(zip)) {
    res.send(`${zip} exists in our records.`);
  } else {
    next(`${zip} does not exist in our records.`);
  }
});

app.get("/zoos/all", (req, res, next) => {
  const { admin } = req.query;
  if (admin === "true") {
    res.send(`All zoos: ${getZoos().join("; ")}`);
  } else {
    next("You do not have access to that route.");
  }
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const { zip } = req.params;
  if (getZoos(zip).length >= 1) {
    res.send(`${zip} zoos: ${getZoos(zip).join("; ")}`);
  } else {
    next(`${zip} has no zoos.`);
  }
});

// error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

app.use((req, res) => {
  res.send(`That route could not be found!`);
});

module.exports = app;
