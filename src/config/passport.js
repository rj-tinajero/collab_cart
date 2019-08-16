const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../db/models").User;

passport.serializeUser(function(user, done) {
 done(null, user);
});
passport.deserializeUser(function(user, done) {
 done(null, user);
});


  passport.use(
    new GoogleStrategy(
     {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "https://rj-tinajero-collabcart.herokuapp.com/auth/google/callback",
     },
     function(accessToken, refreshToken, profile, done) {
      var userData = {
       email: profile.emails[0].value,
       name: profile.displayName,
       token: accessToken
      };
      User.findOrCreate({ where: {email: userData.email} }).then(
        user => {
          if(!user) { 
           return User.create({ 
              email: userData.email
            })
          } else { 
            return Promise.resolve(user);
          }
        }
      )
       
       done(null, userData);
     },
    )
   );


// passport.use(
//  new GoogleStrategy(
//   {
//    clientID: process.env.CLIENT_ID,
//    clientSecret: process.env.CLIENT_SECRET,
//    callbackURL: "http://localhost:5000/auth/google/callback",
//    proxy: true
//   },
//   function(accessToken, refreshToken, profile, done) {
//     var userData = {
//       email: profile.emails[0].value,
//       name: profile.displayName,
//       token: accessToken
//      };
//    User.findOrCreate({ where: {email: userData.email} }).then(
//      user => {
//        if(!user) { 
//         return User.create({ 
//            email: userData.email
//          })
//        } else { 
//          return Promise.resolve(user);
//        }
//      }
//    );

//     done(null, userData);
//   },
//  )
// );
