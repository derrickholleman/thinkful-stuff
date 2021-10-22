// server.js //
const { PORT = 5000 } = process.env;
const app = require("./app");

const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

// app.js //
const express = require("express");
const app = express();
app.use(express.json()); // handles http requests

module.exports = app;

// set default routes in app.js // 
app.use('/foo', fooRouter)
app.use('/bar', barRouter)

// error handling in app.js //
app.get("/favicon.ico", (req, res) => res.sendStatus(204));
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

app.use((error, req, res, next) => {
  console.error(error);
  // set default error status & message
  const { status = 500, message = "Something went wrong!" } = error;
  // send error status code and message in json format
  res.status(status).json({ error: message });
});

// method not allowed src/errors/methodNotAllowed.js //
function methodNotAllowed(req, res, next) {
  next({
    status: 405,
    message: `${req.method} not allowed for ${req.originalUrl}`,
  });
}

module.exports = methodNotAllowed;

// foo.router.js setup //
const router = require("express").Router();

router.route('/') // creates default route

module.exports = router

// NESTED ROUTES //
// if child route in nested route
const router = require("express").Router({ mergeParams = true });

// in foo.router.js connect parent route (foo) to child route
router.use('/:fooId/child', validationMiddlewareFromFooController, childRouter)

// default body to verify POST, PUT requests 
const { data: { text, name, birthday, etc } = {} } = req.body;

