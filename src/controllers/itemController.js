const itemQueries = require("../db/queries.items");
const Item = require("../db/models").Item;

module.exports = {
   create(req, res, next) { console.log(req.body, "create thing with reqparams")
      let newItem = {
         title: req.body.title,
         listId: req.body.listId
      };
      itemQueries.addItem(newItem, (err, item) => {
         if(err) {
            console.log(err.toString(), "err in create");
            res.redirect(500, "/");
         } else {
            res.redirect("/")
         }
      })
   },
   destroy(req, res, next) { console.log(req.body.id, "reqparamsid");
      Item.destroy({
         where: {
            id: req.body.id
         }
      })
      .then(() =>  res.redirect('/'))
      .catch((err) => console.log(err, "err in destroy"));
   },
   update(req, res, next) {
      itemQueries.updateItem(req.body.id, req.body, (err, item) => { console.log(req.body.id, "req")
         if(err || item == null) { console.log(err, "error with update");
            res.redirect(404, '/');
         } else {
            res.redirect('/');
         }
      });
   },
   index(req, res, next) { 
      itemQueries.getList(req.params.id, (err, list) => {
         if(err || list == null) {
            console.log(err, "error in controlller for index");
            res.redirect(404, "/")
         } else {
            res.json(list)
         }
      })
      // console.log(req.props, "anything here?");
      // itemQueries.getAllItems((err, list) => { 
      //    if(err) {
      //       console.log(err, "error in controlller for item index");
      //       res.redirect(500, "/")
      //    } else {
      //       res.json(list)
      //    }
      // })
   }
}