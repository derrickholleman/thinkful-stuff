const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");
// enable CORS for delete requests only
const corsDelete = cors({ methods: "DELETE" });
const corsGet = cors({ methods: "GET" });

router
  .route("/:corsId")
  // enable cors for a specific route
  .all(cors())
  .get(controller.read)
  .put(controller.update)
  .delete(corsDelete, controller.delete)
  // options always goes at the end before .all()
  .options(corsDelete)
  .all(methodNotAllowed);

router
  .route("/")
  .all(cors())
  .get(corsGet, controller.list)
  .post(controller.create)
  .options(corsGet)
  .all(methodNotAllowed);

module.exports = router;
