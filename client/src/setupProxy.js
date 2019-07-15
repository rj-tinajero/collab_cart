const proxy = require("http-proxy-middleware");

module.exports = function(app) {
   app.use('/api/lists', proxy({ target: 'http://localhost:5000'}));
}