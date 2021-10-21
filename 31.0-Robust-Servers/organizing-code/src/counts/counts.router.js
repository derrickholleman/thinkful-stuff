const router = require("express").Router();
const controller = require("./counts.controller");

// makes a get request according to the function specified in controller 
router.route("/").get(controller.list);
router.route("/:countName").get(controller.read);

module.exports = router;