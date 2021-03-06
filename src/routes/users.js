const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../db/models").User;
const validation = require("./validation");

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
       console.log(token, "TOKEN!!!!!");
       let token1 = [];
       function find(email) {
        return User.findOne({ where: {email: req.user.email} })
        .then((user) => {
            token1.push(user.id);
            let token2 = token1[0];
            if(process.env.NODE_ENV === 'production') {
                res.redirect("https://rj-tinajero-collabcart.herokuapp.com?token=" + token2);
               }
               res.redirect("http://localhost:3000?token=" + token2);
        })
        .catch((err) => {
            console.log(err);
        })
               
       } 
       find(req.user.email);
       

       
    //    if(process.env.NODE_ENV === 'production') {
    //     res.redirect("https://rj-tinajero-collabcart.herokuapp.com?token=" + token);
    //    }
    //    res.redirect("http://localhost:3000?token=" + token);
      
   }
   
);
router.get('/logout', function(req, res) {
    console.log("logged out!");
    req.logout();
    res.redirect('/');
});


module.exports = router;