const express = require("express");
const router = express.Router();

const purchasedController = require("../controllers/purchasedController");

router.post("/lists/:itemId/createp", purchasedController.create);
router.post("/lists/:itemId/deletep", purchasedController.destroy);

module.exports = router;