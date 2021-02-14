const el = require("./elements");
const I = require("./helper");
let assert = require("assert");

// Navigation instructions prescribed by '/src/acceptanceCriteria.txt'
class User {
  constructor(page) {
    this.page = page;
  }

  async HomePage(url) {
    await this.page.goto(url);
    await I.urlMatch(this.page, url);
    console.log("User is on Homepage");
  }

  //
  async AboutUsNavigation(url) {
    // Click options hamburger menu, then about us
    await this.page.click(el.options.menu);
    await this.page.click(el.options.aboutUs);
    await I.urlMatch(this.page, url, "about-us/");
    console.log("User is on About Us Page");
  }

  async ContactUsNavigation(url) {
    await this.page.click(el.footer.contactUs);
    await I.urlMatch(this.page, url, "contact-us/");
    console.log("User is on Contact Us Page");
  }

  async AddressValidation(url) {
    const x = await this.page.innerText(el.contactUs.address);
    //console.log(x);
    assert.strictEqual(
      x,
      "600 W Chicago Ave. Ste 510, Chicago, IL 60654 | Main: 833.514.4187 | Customer Service: 800.739.4137"
    );
    console.log("Address is Validated");
  }
}
module.exports = User;
