const List = require("./models").List;
const Item = require("./models").Item;

module.exports = {
   addItem(newItem, callback) {
      return Item.create(newItem)
      .then((item) => {
         callback(null, item);
      })
      .catch((err) => {
         callback(err);
      })
   },
   updateItem(id, updatedItem, callback) {
      return Item.findById(id)
      .then((item) => {
         if(!item) {
            console.log(err, "err in update")
            return callback("item not found")
         }
         item.update(updatedItem, {
            fields: Object.keys(updatedItem)
         })
         .then(() => {
            callback(null, item);
         })
         .catch((err) => {
            callback(err);
         });
      });
   },
   getList(id, callback) {
      return List.findById(id
         , {
          include: [{
              model: Item,
              as: "items"
          }]
      }
      )
      .then((list) => {
          callback(null, list);
      })
      .catch((err) => {
          callback(err);
      })
  },
  getAllItems(callback) {
   return Item.all(
   //    {
   //    where: {
   //       listId: id
   //    }
   // }
   )
   .then((items) => {
      callback(null, items);
   })
   .catch((err) => {
      callback(err);
   })
}

   
}