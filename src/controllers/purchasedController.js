const purchasedQueries = require("../db/queries.purchased");

module.exports = {
   create(req, res, next) {
      purchasedQueries.createPurchased(req, (err, purchased) => {
         if(err) {
            console.log(err, "err ova here!");
         }
         res.redirect(req.headers.referer);
      });
   },
   destroy(req, res, next) {
      purchasedQueries.deletePurchased(req, (err, purchased) => {
         if(err) {
            console.log(err, "err ova here!");
         }
         res.redirect(req.headers.referer);
      });
   }
}