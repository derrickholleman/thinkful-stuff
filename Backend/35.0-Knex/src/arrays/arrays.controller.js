const arraysService = require("./arrays.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");

// LIST
async function list(req, res) {
  const data = await arraysService.list();
  res.json({ data });
}

// READ
async function read(req, res) {
  const { array } = res.locals;
  const data = await arraysService.read(array.array_id);
  res.json({ data });
}

// POST
async function create(req, res) {
  const data = await arraysService.create(req.body.data);
  res.status(201).json({ data });
}

// DELETE
async function destroy(req, res) {
  const { array } = res.locals;
  await arraysService.delete(array.array_id);
  res.sendStatus(204);
}

// VALIDATION
async function arrayExists(req, res, next) {
  const { arrayId } = req.params;
  const validArray = await arraysService.read(arrayId);

  if (validArray) {
    res.locals.array = validArray;
    return next();
  } else {
    next({
      status: 404,
      message: "Array not found",
    });
  }
}

const hasRequiredProperties = hasProperties("textArray", "numArray");

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(arrayExists), asyncErrorBoundary(read)],
  create: [
    asyncErrorBoundary(hasRequiredProperties),
    asyncErrorBoundary(create),
  ],
  delete: [asyncErrorBoundary(arrayExists), asyncErrorBoundary(destroy)],
};
