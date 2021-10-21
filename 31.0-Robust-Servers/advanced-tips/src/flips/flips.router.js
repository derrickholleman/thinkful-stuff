const router = require("express").Router();
const controller = require("./flips.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list);

// added method not allowed to handle all unspecified requests
router
  .route("/:flipId")
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
