const router = require("express").Router();
const controller = require("./notes.controller");
const ratingsRouter = require("../ratings/ratings.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

// set router to use this path for ratings/
router
  .use("/:noteId/ratings", controller.noteExists, ratingsRouter)
  .all(methodNotAllowed);

router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
