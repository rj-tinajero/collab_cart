require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const logger = require("morgan");
const session = require("express-session");
const passportConfig = require("./passport-config");
const flash = require("express-flash");
const expressValidator = require("express-validator");
const jwt = require("jsonwebtoken");
const cookParser = require('cookie-parser');
const passport = require("passport");

module.exports = {
  init(app, express) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookParser());
    app.use(expressValidator());
    app.use(cors());
    app.use(logger('dev'));
    app.use(passport.initialize());
    require("./passport");
    app.use(session({
      secret: process.env.cookieSecret,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1.21e+9 }
    }));
    app.use(flash());
    // passportConfig.init(app);

    // app.use((req, res, next) => {
    //   res.locals.currentUser = req.user;
    //   next();
    // })
  }
};