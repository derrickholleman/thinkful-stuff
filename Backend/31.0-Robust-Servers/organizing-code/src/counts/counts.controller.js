const counts = require("../data/counts-data");

// gets passed to router as controller.list
function list(req, res) {
  res.json({ data: counts });
}
function read(req, res, next) {
  const { countName } = req.params;
  const foundCount = counts[countName];
  if (foundCount !== undefined) {
    res.json({ data: foundCount });
  } else {
    // set error object for passing to error handler
    next({
      status: 404,
      message: `Count name not found: ${countName}`,
    });
  }
};

module.exports = {
  list,
  read
};