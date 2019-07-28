const express = require("express");
const router = express.Router();
const passport = require("passport");
const validation = require("./validation");
const withAuth = require("../auth/middleware");

const userController = require("../controllers/userController");

// router.get("/users/sign_up", userController.signUp);
// router.post("/users/create", userController.create);
// router.get("/users/sign_in", userController.signInForm);
// router.post("/api/users/sign_in", userController.signIn);
// router.get("/api/users/sign_out", userController.signOut);
// router.get("/api/currentUser", userController.currentUser);
// router.get("/checkToken", function(req, res) {
//    res.sendStatus(200);
// });

/* GET Google Authentication API. */
router.get("/auth/google",
   passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/auth/google/callback",
   passport.authenticate("google", { failureRedirect: "/", session: false }),
   function(req, res) {
       var token = req.user.token;
       res.redirect("http://localhost:3000?token=" + token);
   }
);
router.get('/logout', function(req, res) {
    console.log("logged out!");
    req.logout();
    res.redirect('/');
})


module.exports = router;