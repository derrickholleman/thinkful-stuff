const router = require("express").Router({ mergeParams: true });
const controller = require("./restaurants.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/average-rating-by-owner")
  .get(controller.listAverageRatingByOwner)
  .all(methodNotAllowed);


module.exports = router;
