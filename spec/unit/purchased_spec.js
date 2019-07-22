const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../src/db/models").List;
const Item = require("../src/db/models").Item;
const Purchased = require("../src/db/models").Purchased;

describe("Item", () => {

  beforeEach((done) => {
    this.list;
    this.item;
    this.purchased
    sequelize.sync({force: true}).then((res) => {
      List.create({
        title: "List",
      })
      .then((list) => {
        this.list = list;
        list.create({
          title: "item",
          listId: this.list.id
        })
        .then((item) => {
          this.item = item;
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });

  describe("#create()", () => {
       it("should mark purchased for a item", (done) => {
  
         Purchased.create({
           itemId: this.item.id
         })
         .then((purchased) => {
           expect(purcahsed.itemId).toBe(this.item.id);
           done();
  
         })
         .catch((err) => {
           console.log(err);
           done();
         });
       });
       it("should not create purchased without assigned item", (done) => {
         Purchased.create({
           itemId: null
         })
         .then((purchased) => {
  
          // the code in this block will not be evaluated since the validation error
          // will skip it. Instead, we'll catch the error in the catch block below
          // and set the expectations there
  
           done();
  
         })
         .catch((err) => {
  
           expect(err.message).toContain("Purchased.itemId cannot be null");
           done();
  
         })
       });
  
     });
});