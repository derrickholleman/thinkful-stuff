const categoriesService = require("./categories.service");

// LIST
async function list(req, res, next) {
  const data = await categoriesService.list();
  res.json({ data });
}

// READ
async function read(req, res, next) {
  await categoriesService.read();
  res.json({ data: res.locals.category });
}

// VALIDATION
async function categoryExists(req, res, next) {
  const { categoryId } = req.params;
  const category = await categoriesService.read(categoryId);

  if (category) {
    res.locals.category = category;
    return next();
  } else {
    next({
      status: 404,
      message: "Category could not be found",
    });
  }
}

module.exports = {
  list,
  read: [categoryExists, read],
};
