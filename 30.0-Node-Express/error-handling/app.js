const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/states/:abbreviation", (req, res, next) => {
  const abbreviation = req.params.abbreviation;
  if (abbreviation.length !== 2) {
    next("State abbreviation is invalid. Please use two letters.");
  } else {
    res.send(`${abbreviation} is a nice state, I'd like to visit.`);
  }
});

app.get("/hello", (req, res, next) => {
  const { name } = req.query;
  name ? res.send(`Hello ${name}!`) : next("name query required");
});

app.get("/animals/:animal", (req, res, next) => {
  const { animal } = req.params;
  let validName = null;
  let numMatch = /[0-9]/;
  for (let letter in animal) {
    if (numMatch.test(animal[letter])) {
      console.log("number found");
      validName = false;
    } else {
      validName = true;
    }
  }

  if (validName) {
    res.send(`A ${animal} is a great animal!`);
  } else {
    next("animal name must contain only letters");
  }
});

// Error handler.  whatever is passed into next() will be put into the (err) param
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

// Not-found handler.  catches all non existent routes 
app.use((req, res) => {
  res.send(`The route ${req.path} does not exist!`);
});

module.exports = app;
