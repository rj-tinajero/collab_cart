const List = require("./models").List;
const Item = require("./models").Item;
const User = require("./models").User;
const Purchased = require("./models").Purchased;

module.exports = {
   getAllLists(callback) {
      return List.all()
      .then((lists) => {
         callback(null, lists);
      })
      .catch((err) => {
         callback(err);
      })
   },
   addList(newList, callback) {
      return List.create({
         title: newList.title
      })
      .then((list) => {
         callback(null, list);
      })
      .catch((err) => {
         callback(err);
      })
   },
   getList(id, callback) {
      return List.findById(id, {
          include: [
             {
              model: Item,
              as: "items",
             },
             {
               model: User,
               as: "user"
             },
         ]
      })
      .then((list) => {
          callback(null, list);
      })
      .catch((err) => {
          callback(err);
      })
  }
}