const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router
  .route("/movies?is_showing=true")
  .get(controller.listMoviesCurrentlyShowing);

module.exports = router;
