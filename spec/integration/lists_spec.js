const request = require("request");
const server = require("../../src/server");
const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../src/db/models").List;
const base = "http://localhost:5000/lists/";

describe("routes : lists", () => {
   beforeEach((done) => {
      this.list;
      sequelize.sync({force: true}).then((res) => {

       List.create({
         title: "List Title",
       })
        .then((list) => {
          this.list = list;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });

      });

    });

  describe("GET /lists", () => {

    it("should return a status code 200 and all lists", (done) => {
      request.get(`${base}${this.list.id}`, (err, res, body) => {
        // expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("List Title");
        done();
      });
    });

  });

  describe("POST /lists/create", () => {
    const options = {
      url: `${base}create`,
      form: {
        title: "A list"
      }
    };
    it("should create a list", (done) => {
      request.post(options, 
        (err, res, body) => {
          List.findOne({where: {title: "A list"}})
          .then((list) => {
            expect(list.title).toBe("A list");
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        });
    });
  });

  describe("GET /lists/:id", () => {

    it("should render a view with the selected list", (done) => {
      request.get(`${base}${this.list.id}`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("List Title");
        done();
      });
    });

  });

  describe("GET /lists/:id/delete", () => {
    it("should delete the list with the associated ID", (done) => {
      List.all()
      .then((lists) => {
        const listCountBeforeDelete = lists.length;

        expect(listCountBeforeDelete).toBe(1);
        request.get(`${base}${this.list.id}/delete`, (err, res, body) => {
          List.all()
          .then((lists) => {
            expect(err).toBeNull();
            expect(lists.length).toBe(listCountBeforeDelete - 1);
            done();
          })

        });
      });

    });

  });

});