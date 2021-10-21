const router = require("express").Router();
const controller = require("./counts.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// added a methodNotAllowed file to handle all methods that aren't defined in this route file (post, put, delete)
router.route("/:countName").get(controller.read).all(methodNotAllowed)
router.route("/").get(controller.list).all(methodNotAllowed)

module.exports = router;