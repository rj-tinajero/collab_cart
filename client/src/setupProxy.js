const proxy = require("http-proxy-middleware");

module.exports = function(app) {
   app.use('/api/lists', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists/:id', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists/:id/delete', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists/:listId/create', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists/:listId/delete', proxy({ target: 'http://localhost:5000'}));
   app.use('/lists/:listId/update', proxy({ target: 'http://localhost:5000'}));
   app.use('/api/lists/:listId', proxy({ target: 'http://localhost:5000'}));
   app.use('/users/sign_up', proxy({ target: 'http://localhost:5000' }));
   app.use('/users/create', proxy({ target: 'http://localhost:5000' }));
   app.use('/users/sign_out', proxy({ target: 'http://localhost:5000' }));
   app.use('/users/sign_in', proxy({ target: 'http://localhost:5000' }));
}