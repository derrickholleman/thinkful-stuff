const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const moviesService = require("./movies.service");

async function list(req, res) {
  const { is_showing } = req.query;
  let data 

  if (is_showing) {
    data = await (await moviesService.listMoviesCurrentlyShowing()).slice(0, 15);
  } else {
    data = await moviesService.list();
  }

  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
