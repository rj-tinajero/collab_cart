module.exports = {
   init(app){
     const staticRoutes = require("../routes/static");
     const listRoutes = require("../routes/lists");
     const itemRoutes = require("../routes/items");
     const userRoutes = require("../routes/users");
     const purRoutes = require("../routes/purchased");
     app.use(staticRoutes);
     app.use(listRoutes);
     app.use(itemRoutes);
     app.use(userRoutes);
     app.use(purRoutes);
   }
 }