const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));

const checkForAbbreviationLength = (req, res, next) => {
  const { abbreviation } = req.params;
  if (abbreviation.length !== 2) {
    // next('some string') is passed to error handling middleware
    next("State abbreviation is invalid.");
  } else {
    // continues on to next step
    next();
  }
};

app.get(
  "/states/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    const { abbreviation } = req.params;
    res.send(`${abbreviation} is a nice state, I'd like to visit.`);
  }
);

app.get(
  "/travel/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    const { abbreviation } = req.params;
    res.send(`Enjoy your trip to ${abbreviation}!`);
  }
);

app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  const { age, gender } = req.query;
  res.send(
    age && gender
      ? `Hello, ${name}.  I see that you are ${age} years old and are a ${gender}`
      : `Hello, ${name}`
  );
  console.log(req.query)
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
