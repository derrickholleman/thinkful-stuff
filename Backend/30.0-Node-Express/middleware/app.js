const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

const sayHello = (req, res, next) => {
  res.send("Hello World!");
  // next() makes sure the function after runs
  next();
};

app.use(sayHello);

module.exports = app;
