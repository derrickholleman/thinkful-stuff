const service = require("./restaurants.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const validFields = new Set([
  "restaurant_name",
  "restaurant_cuisine",
  "restaurant_address",
]);

function hasValidFields(req, res, next) {
  const { data = {} } = req.body;

  const invalidFields = Object.keys(data).filter(
    (field) => !validFields.has(field)
  );

  if (invalidFields.length)
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  next();
}

async function listAverageRatingByOwner(req, res, next) {
  let data = await service.listAverageRatingByOwner();
  // get response object and map in format you want.
  // check res object by doing res.json({ data: data })
  data = data.map((restaurant) => {
    return { avg: Number(restaurant.avg), owner_name: restaurant.owner_name };
  });
  res.json({ data });
}

async function list(req, res) {
  res.json({ data: await service.list() });
}

module.exports = {
  list: asyncErrorBoundary(list),
  listAverageRatingByOwner: asyncErrorBoundary(listAverageRatingByOwner)
};
