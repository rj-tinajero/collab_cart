const proxy = require("http-proxy-middleware");

if(process.env.NODE_ENV === 'production') {
   module.exports = function(app) {
      app.use('/api/lists', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/lists', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/lists/:id', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/lists/:id/delete', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/lists/:listId/create', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/lists/:listId/delete', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/lists/:listId/update', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/api/lists/:listId', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/auth/google', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/auth/google/callback', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
      app.use('/logout', proxy({ target: 'https://rj-tinajero-collabcart.herokuapp.com/'}));
   }
} else {
   module.exports = function(app) {
      app.use('/api/lists', proxy({ target: 'http://localhost:5000'}));
      app.use('/lists', proxy({ target: 'http://localhost:5000'}));
      app.use('/lists/:id', proxy({ target: 'http://localhost:5000'}));
      app.use('/lists/:id/delete', proxy({ target: 'http://localhost:5000'}));
      app.use('/lists/:listId/create', proxy({ target: 'http://localhost:5000'}));
      app.use('/lists/:listId/delete', proxy({ target: 'http://localhost:5000'}));
      app.use('/lists/:listId/update', proxy({ target: 'http://localhost:5000'}));
      app.use('/api/lists/:listId', proxy({ target: 'http://localhost:5000'}));
      app.use('/auth/google', proxy({ target: 'http://localhost:5000'}));
      app.use('/auth/google/callback', proxy({ target: 'http://localhost:5000'}));
      app.use('/logout', proxy({ target: 'http://localhost:5000'}));
   }
}
