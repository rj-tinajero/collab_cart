const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController")

router.post("/lists/:listId/create", itemController.create);
router.post("/lists/:listId/delete", itemController.destroy);
router.post("/lists/:listId/update", itemController.update);
router.get("/lists/:listId", itemController.index);

module.exports = router;