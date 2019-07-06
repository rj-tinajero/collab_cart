const express = require("express");
const app = express();

const routeConfig = require("./config/route-config.js");
const appConfig = require("./config/main-config");

appConfig.init();
routeConfig.init(app);

module.exports = app;