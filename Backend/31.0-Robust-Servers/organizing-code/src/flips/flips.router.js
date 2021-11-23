const router = require("express").Router();
const controller = require("./flips.controller");

// makes a get request according to the function specified in controller
router.route("/").get(controller.list);

// able to get a single flip and also update it
router
  .route("/:flipId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

// post request to /flips. combines get and post
router.route("/").get(controller.list).post(controller.create);

module.exports = router;
