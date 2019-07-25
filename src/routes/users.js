const express = require("express");
const router = express.Router();
const validation = require("./validation");

const userController = require("../controllers/userController");

router.get("/users/sign_up", userController.signUp);
router.post("/users/create", userController.create);
router.get("/users/sign_in", userController.signInForm);
router.post("/api/users/sign_in", userController.signIn);
router.get("/api/users/sign_out", userController.signOut);
router.get("/api/currentUser", userController.currentUser);

module.exports = router;