const flips = require("../data/flips-data");
// import counts to increment count on post
const counts = require("../data/counts-data");

// get all flips
function list(req, res) {
  res.json({ data: flips });
}

// get single flip
function read(req, res) {
  const { flipId } = req.params;
  const foundFlip = flips.find((flip) => flip.id === Number(flipId));
  res.json({ data: foundFlip });
}

// POST REQUEST
function create(req, res) {
  let lastFlipId = flips.reduce((maxId, flip) => Math.max(maxId, flip.id), 0);
  const { data: { result } = {} } = req.body;
  const newFlip = {
    id: ++lastFlipId,
    result,
  };
  flips.push(newFlip);
  counts[result] = counts[result] + 1;
  res.status(201).json({ data: newFlip });
}
// PUT REQUEST
function update(req, res) {
  // getting the response object from res.locals in flipExists()
  const flip = res.locals.flip

  const originalResult = foundFlip.result;
  const { data: { result } = {} } = req.body;

  if (originalResult !== result) {
    // update the flip
    flip.result = result;
    // Adjust the counts
    counts[originalResult] = counts[originalResult] - 1;
    counts[result] = counts[result] + 1;
  }

  res.json({ data: flip });
}

// DELETE REQUEST
function destroy(req, res) {
  const { flipId } = req.params;
  const index = flips.findIndex((flip) => flip.id === Number(flipId));
  // `splice()` returns an array of the deleted elements, even if it is one element
  const deletedFlips = flips.splice(index, 1);
  deletedFlips.forEach(
    (deletedFlip) =>
      (counts[deletedFlip.result] = counts[deletedFlip.result] - 1)
  );

  res.sendStatus(204);
}

// VALIDATION
function flipExists(req, res, next) {
  const { flipId } = req.params;
  const foundFlip = flips.find((flip) => flip.id === Number(flipId));
  if (foundFlip) {
    // storing foundFlip in res.locals
    res.locals.flip = foundFlip
    return next();
  }
  next({
    status: 404,
    message: `Flip id not found: ${flipId}`,
  });
}
function bodyHasResultProperty(req, res, next) {
  const { data: { result } = {} } = req.body;
  if (result) {
    next();
  } else {
    next({
      status: 400,
      message: "A 'result' property is required",
    });
  }
}
function resultPropertyIsValid(req, res, next) {
  const { data: { result } = {} } = req.body;
  const validResult = ["heads", "tails", "edge"];
  if (validResult.includes(result)) {
    return next();
  }
  next({
    status: 400,
    message: `Value of the 'result' property must be one of ${validResult}. Received: ${result}`,
  });
}

module.exports = {
  create: [bodyHasResultProperty, resultPropertyIsValid, create],
  list,
  read: [flipExists, read],
  update: [flipExists, bodyHasResultProperty, resultPropertyIsValid, update],
  delete: [flipExists, destroy],
};
