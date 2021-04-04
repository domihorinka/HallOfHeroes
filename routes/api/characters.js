const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

router.route("/")
    .get(charactersController.findAll)
    .post(charactersController.create)

router
    .route("/id")
    .get(charactersController.findById)
    .put(charactersController.update)
    .delete(charactersController.remove)

module.exports = router;