const request = require("request");
const server = require("../../src/server");
const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../db/models").List;
const base = "http://localhost:3000/lists/";

describe("routes : lists", () => {
   beforeEach((done) => {
      this.list;
      sequelize.sync({force: true}).then((res) => {

       List.create({
         title: "JS Frameworks",
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
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Lists");
        expect(body).toContain("JS Frameworks");
        done();
      });
    });

  });
});