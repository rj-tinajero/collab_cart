const List = require("./models").List;

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
      return List.findById(id
      //    , {
      //     include: [{
      //         model: Post,
      //         as: "posts"
      //     }]
      // }
      )
      .then((list) => {
          callback(null, list);
      })
      .catch((err) => {
          callback(err);
      })
  }
}