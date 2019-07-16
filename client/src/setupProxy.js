const proxy = require("http-proxy-middleware");

module.exports = function(app) {
   app.use('/api/lists', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists/:id', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists/:id/delete', proxy({ target: 'http://localhost:5000'}));
}