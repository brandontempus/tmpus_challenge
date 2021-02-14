const request = require("supertest");
const hostUrl = "https://reqres.in";
let expect = require("chai").expect;
const expectedUserData = require("./expectedResponses");

class ReqRes {
  static async users() {
    // GET url and expect 200
    const response = await request(hostUrl).get("/api/users").expect(200);

    //console.log(`Response Code: ${response.status}`);

    // response body
    const r = response.body;
    const userData = response.body.data[0];

    // Expect response json to have given attributes
    ["page", "per_page", "total", "total_pages", "data"].map((_) =>
      expect(r).to.have.property(_)
    );
    console.log("Attributes In Response");

    // Expect response.body.data[-0] to
    expect(userData).to.contain(expectedUserData.user1);
    console.log("User Data In Response");

    return response;
  }
}

module.exports = ReqRes;

ReqRes.users();
