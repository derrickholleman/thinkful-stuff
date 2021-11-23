const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

app.use("/users/:userId", (req, res, next) => {
  const { userId } = req.params;
  const foundUser = users.find((user) => user.id === Number(userId));

  if (foundUser) {
    res.json({ data: foundUser });
  } else {
    next(`User ID not found: ${userId}`);
  }
});

app.use("/users", (req, res, next) => {
  res.json({ data: users });
});

app.use("/states/:stateCode", (req, res, next) => {
  const { stateCode } = req.params;
  const foundStateCode = states[stateCode];

  if (foundStateCode !== undefined) {
    res.json({ data: { stateCode: stateCode, name: foundStateCode } });
  } else {
    next(`State code not found: ${stateCode}`);
  }
});

app.use("/states", (req, res, next) => {
  res.json({ data: states });
});

// Not found handler
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

module.exports = app;
