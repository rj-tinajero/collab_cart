const sequelize = require("../../src/db/models/index").sequelize;
const request = require("request");
const server = require("../../src/server");
const List = require("../../src/db/models").List;
const Item = require("../../src/db/models").Item;
const base = "http://localhost:5000/lists/";

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
          listId: this.list.id,
          purchased: null
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

 describe("POST /list/:listId/delete" , () => {
  it("should delete the item", (done) => {
    const options = {
      url: `${base}${this.item.id}/delete`,
      form: {
        id: this.item.id
      }
    };
    Item.all()
      .then((items) => {
        const itemCountBeforeDelete = items.length;

        expect(itemCountBeforeDelete).toBe(1);
        request.post(options, (err, res, body) => {
          Item.all()
          .then((items) => {
            expect(err).toBeNull();
            expect(items.length).toBe(itemCountBeforeDelete - 1);
            done();
          });

        });
      });
  });
 });

 describe("POST /list/:listId/update", () => {
   it("should update the items purchased value", (done) => {
     const options = {
       url: `${base}${this.item.id}/update`,
       form: {
         id: this.item.id,
         purchased: true
       }
     };
     request.post(options,
      (err, res, body) => {
        Item.findOne({
          where: { purchased: true }
        })
        .then((item) => { 
          expect(item.purchased).toBe(true);
          done();
        })
      })
   })
 })


});