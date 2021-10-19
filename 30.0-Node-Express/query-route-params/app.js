const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

const sayHello = (req, res) => {
  const { firstName, lastName } = req.query
  const content = firstName ? `Hello, ${firstName} ${lastName}!` : "Hello!"
  res.send(content)
};
// http://localhost:5000/hello?firstName=Derrick&lastName=Holleman

const saySomething = (req, res) => {
  const { greeting } = req.params // must match param in URL
  const { name } = req.query

  const content = greeting && name ? `${greeting}, ${name}` : `${greeting}!`
  res.send(content)
} 
// http://localhost:5000/say/Hello?name=Derrick = Hello, Derrick!

const sayGoodbye = (req, res) => {
  res.send("Goodbye!")
}

const homePage = (req, res) => {
  console.log(req.params)
  res.send("This is the home page!");
};

app.get("/hello", sayHello);
app.get("/", homePage);
app.get("/say/goodbye", sayGoodbye) // put specific match first
app.get("/say/:greeting", saySomething) // this will take in anything in place of :greeting

module.exports = app;

// qualified challenge 

// // Route functions
// const sayWelcome = (req, res) => {
//   const welcome = "Welcome to the server"
//   const name = req.query.name;
//   const content = name && welcome ? `${welcome}, ${name}!` : `${welcome}!`;
//   res.send(content);
// };

// const sayGoodbye = (req, res) => {
//   const phrase = "We're sorry to see you go";
//   const name = req.query.name;
//   const content = name && phrase ? `${phrase}, ${name}!` : `${phrase}!`;
//   res.send(content);
// };

// const saySomething = (req, res) => {
//   const greeting = req.params.greeting;
//   const name = req.query.name;

//   const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
//   res.send(content);
// };

// // Routes
// app.get("/say/goodbye", sayGoodbye);
// app.get("/say/welcome", sayWelcome);
// app.get("/say/:greeting", saySomething);
