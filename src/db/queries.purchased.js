const Purchased = require("./models").Purchased;

module.exports = {
   createPurchased(req, callback){
      return Purchased.create({
        itemId: req.params.itemId,
      })
      .then((fpurchasd) => {
        callback(null, purchased);
      })
      .catch((err) => {
        callback(err);
      });
    },
    deletePurchased(req, callback) {
       const id = req.params.id;
       return Purchased.findByPk(id)
       .then((purchased) => {
          if(!purchased) {
             return callback("Purchased item not found");
          } else {
             Purchased.destroy({ where: { id }})
             .then((deletedRecordsCount) => {
                callback(null, deletedRecordsCount);
             })
          }

       })
       .catch((err) => {
          callback(err);
       });
    }
}