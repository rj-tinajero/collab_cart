require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const logger = require("morgan");

module.exports = {
  init(app, express){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());
    app.use(logger('dev'));
  }
};