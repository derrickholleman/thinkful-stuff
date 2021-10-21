const ratings = require("../data/ratings-data");

function list(req, res) {
  const { noteId } = req.params;
  // filter ratings response where the rating.noteId equals the noteId param
  const filteredRatings = ratings.filter((rating) => rating.noteId === noteId);
  if (noteId) {
    res.json({ data: filteredRatings });
  } else {
    res.json({ data: ratings })
  }
}

function read(req, res) {
  res.json({ data: res.locals.rating });
}

// VALIDATION
function ratingExists(req, res, next) {
  const { ratingId } = req.params;
  const foundRating = ratings.find((rating) => rating.id === Number(ratingId));

  if (foundRating) {
    res.locals.rating = foundRating;
    next();
  } else {
    next({
      status: 404,
      message: `Rating id could not be found: ${ratingId}`,
    });
  }
}

module.exports = {
  list,
  read: [ratingExists, read],
};
