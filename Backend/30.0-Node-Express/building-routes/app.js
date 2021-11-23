const express = require("express");
const morgan = require("morgan");
const app = express();

const sayHello = (req, res, next) => {
  res.send("Hello World!");
  // next allows morgan to give back info on the specific request
  next();
};

const homePage = (req, res, next) => {
  res.send("This is the home page!");
  next();
};

app.get("/hello", sayHello);
app.get("/", homePage);

app.use(morgan("dev"));
module.exports = app;

// qualified challenge

// const pongRes = (req, res, next) => {
//   res.send('pong!')
// }

// const welcomeMessage = (req, res, next) => {
//   res.send('Welcome to my server.')
// }

// app.get("/ping", pongRes)
// app.get("/welcome", welcomeMessage)
