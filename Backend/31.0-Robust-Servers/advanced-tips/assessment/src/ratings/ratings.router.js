const router = require("express").Router({ mergeParams: true });
const controller = require("./ratings.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:ratingId").get(controller.read).all(methodNotAllowed);
// makes a get request to notes/:noteId/ratings
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
