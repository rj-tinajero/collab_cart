const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController")

router.get("/api/lists", listController.index);
router.post("/lists", listController.create);
router.get("/lists/:id", listController.show);
router.get("/lists/:id/delete", listController.destroy);
router.get("/lists/:id", listController.show);

module.exports = router;