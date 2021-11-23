const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

app.get("/say/welcome", (req, res) => {
  const phrase = "Welcome to the server";
  const name = req.query.name;
  const content = name ? `${phrase}, ${name}!` : `${phrase}!`;
  res.send(content);
});

app.get("/say/goodbye", (req, res) => {
  const phrase = "We're sorry to see you go";
  const { name } = req.query;
  const content = name && phrase ? `${phrase}, ${name}!` : `${phrase}!`;
  res.send(content);
});

app.get("/say/:greeting", (req, res) => {
  const { name } = req.query;
  const { greeting } = req.params;
  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
});

module.exports = app;
