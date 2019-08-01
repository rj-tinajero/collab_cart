const listQueries = require("../db/queries.lists");
const List = require("../db/models").List;

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
         title: req.body.title,
         userId: req.user.id
      };
      listQueries.addList(newList, (err, item) => {
         if(err) {
            res.redirect(500, "/");
         } else {
            res.redirect("/");
         }
      })
   },
   show(req, res, next) {
      listQueries.getAllLists(req.params.id, (err, list) => {
         if(err || list == null) {
            console.log(err, "err in controller");
            res.redirect(404, "/")
         } else {

         }
      })
   },
   destroy(req, res, next) {
      List.destroy({
         where: {
            id: req.params.id
         }
      })
      .then(() => res.redirect('/'));
   },
   show(req, res, next) {
      listQueries.getList(req.params.id, (err, list) => {
         if(err || list == null) {
            console.log(err, "error in controlller for show");
            res.redirect(404, "/")
         } else {
            res.json(list)
         }
      })
   }
 } 