const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");

module.exports = {
   signUp(req, res, next){
     res.json("Sign up");
   },
   create(req, res, next){ 
           let newUser = {
             username: req.body.username,
             email: req.body.email,
             password: req.body.password
           };
           userQueries.createUser(newUser, (err, user) => {
             if(err){ 
               req.flash("error", err);
               res.redirect("/users/sign_up");
             } else {
               passport.authenticate("local")(req, res, () => {
                 res.redirect("/");
               })
             }
           });
         },
   signInForm(req, res, next) {
      res.render("users/sign_in");
   },
   signIn(req, res, next){
      passport.authenticate("local")(req, res, function () {
         if(!req.user){ console.log(req);
            req.flash("notice", "Sign in failed. Please try again.");
            res.redirect("/users/sign_in");
         } else {
            req.flash("notice", "You've successfully signed in!");

            // Issue token
          const payload = {  };
          const token = jwt.sign(req.body.id, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
         }
      })
   },
   signOut(req, res, next){ 
      req.logout();
      req.flash("notice", "You've successfully signed out!");
      res.json(req.user);
    },
    currentUser(req, res, next) {
      res.json(req.user)
    }
 }