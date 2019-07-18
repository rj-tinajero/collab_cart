const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../src/db/models").List;
const Item = require("../../src/db/models").Item;

describe("Item", () => {

  beforeEach((done) => {
    this.list;
    this.item;
    sequelize.sync({force: true}).then((res) => {

      List.create({
        title: "Dad's list"
      })
      .then((list) => {
        this.list = list;
        Item.create({
          title: "Shaver",
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

   it("should create a item object with a title and assigned topic", (done) => {
     Item.create({
       title: "Beard Comb",
       listId: this.list.id
     })
     .then((item) => {
       expect(item.title).toBe("Beard Comb");
       done();

     })
     .catch((err) => {
       console.log(err);
       done();
     });
   });

   it("should not create a item with missing assigned list", (done) => {
      Item.create({
        title: "Rock"
      })
      .then((item) => {
        done();
 
      })
      .catch((err) => {
        expect(err.message).toContain("Item.listId cannot be null");
        done();
 
      })
    });
 
 });

 describe("#setList()", () => {

   it("should associate a list and a item together", (done) => {

     List.create({
       title: "Mom's List",
     })
     .then((newList) => {

       expect(this.item.listId).toBe(this.list.id);
       this.item.setList(newList)
       .then((item) => {
         expect(item.listId).toBe(newList.id);
         done();

       });
     })
   });

 });


});