const express = require("express");
const morgan = require("morgan");
const app = express();

const sayHello = (req, res, next) => {
  res.send("Hello World!");
  // next() makes sure the function after runs
  next();
};

app.use(sayHello);

app.use(morgan("dev"));

module.exports = app;
