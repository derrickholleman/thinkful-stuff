const counts = require("../data/counts-data");

function list(req, res) {
  res.json({ data: counts });
}

function read(req, res) {
  res.json({
    data: res.locals.count,
  });
}

// VALIDATION 
function countExists(req, res, next) {
  const { countName } = req.params;
  console.log(countName)
  const foundCount = counts[countName];

  if (foundCount === undefined) {
    return next({
      status: 404,
      message: `Count name not found: ${countName}`,
    });
  }
  // store count response in res.locals
  res.locals.count = foundCount;
  next();
}

module.exports = {
  list,
  read: [countExists, read],
};
