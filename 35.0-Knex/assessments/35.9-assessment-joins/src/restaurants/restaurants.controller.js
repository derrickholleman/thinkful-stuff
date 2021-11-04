const service = require("./restaurants.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listAverageRatingByOwner(req, res, next) {
  let data = await service.listAverageRatingByOwner();
  // get response array and map in format you want.
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
