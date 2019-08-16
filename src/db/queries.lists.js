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
         title: newList.title,
         userId: newList.userId
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
               model: User,
               as: "user" 
             },
             {
              model: Item,
              as: "items",
             }
         ]
      })
      .then((list) => {
          callback(null, list);
      })
      .catch((err) => {
          console.log(err,"okay in controller now");
          callback(err);
      })
  }
}