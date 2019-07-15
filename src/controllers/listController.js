const listQueries = require("../db/queries.lists");

module.exports = {
   index(req, res, next){
     listQueries.getAllLists((err, lists) => {
        if(err){ 
           res.redirect(500, "static/index");
        } else {
           res.json(lists)
        }
     })
   },
   create(req, res, next) {
      let newList = {
         title: req.body.title
      };
      listQueries.addList(newList, (err, item) => {
         if(err) {
            res.redirect(500, "/")
         } else {
            res.redirect("/lists");
         }
      })
   }
 }