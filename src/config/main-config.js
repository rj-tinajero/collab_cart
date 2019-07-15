require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");

module.exports = {
  init(app, express){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
  }
};