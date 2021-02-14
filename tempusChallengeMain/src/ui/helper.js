let assert = require("assert");

// assert the current page matches the given 'url + route'
// Default route is homepage
async function urlMatch(page, url, route = "") {
  assert.strictEqual(page.url(), `${url}${route}`);
}

module.exports = {
  urlMatch,
};
