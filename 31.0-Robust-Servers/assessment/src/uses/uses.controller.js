const uses = require("../data/uses-data");
const urls = require("../data/urls-data");

// LIST
function list(req, res) {
  const { urlId } = req.params;
  const usesMatchUrl = uses.filter((use) => use.urlId === Number(urlId));

  if (urlId) {
    res.status(200).json({ data: usesMatchUrl });
  } else {
    res.status(200).json({ data: uses });
  }
}

// READ
function read(req, res) {
  res.status(200).json({ data: res.locals.use });
}

// DELETE
function destroy(req, res) {
  const index = uses.findIndex((use) => use.id === Number(res.locals.use.id));
  if (index > -1) {
    uses.splice(index, 1);
  }
  res.sendStatus(204);
}

// VALIDATION
function isValidUse(req, res, next) {
  const { useId } = req.params;
  const foundUse = uses.find((use) => use.id === Number(useId));

  if (foundUse) {
    res.locals.use = foundUse;
    return next();
  } else {
    next({
      status: 404,
      message: `Could not find use id: ${useId}`,
    });
  }
}

function hasValidInformation(req, res, next) {
  const {
    data: { time },
  } = req.body;

  if (!time) {
    next({
      status: 400,
      message: `Please add a time property`,
    });
  }
}

module.exports = {
  list,
  read: [isValidUse, read],
  delete: [isValidUse, destroy],
};
