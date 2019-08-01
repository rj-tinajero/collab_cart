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
   callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
     console.log('access token', accessToken);
     console.log('refresh token', refreshToken);
     console.log('profile', profile.emails[0].value);
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
       } else { console.log(user.id, "alkdfsjbvclihSBDL ");
         return Promise.resolve(user);
       }
     }
   ).then((user) => {
    
    done(null, userData);
   })
  //  console.log(this.user, "KJBIUBWSDPIUWBCP");
  //  done(null, userData);
  },
 )
);
