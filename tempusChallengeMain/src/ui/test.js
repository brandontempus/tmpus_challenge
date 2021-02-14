const { chromium } = require("playwright");
const User = require("./user.js");

(async () => {
  // Setup
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  const user = new User(page);

  const url = "https://www.tempus.com/";

  //Navigate to www.tempus.com.
  await user.HomePage(url);

  // navigate to the "About Us" page via options menu
  await user.AboutUsNavigation(url);

  // Navigate from the Tempus homepage...
  await user.HomePage(url);

  // ... to the "Contact Us" page via the link in the page footer.
  await user.ContactUsNavigation(url);

  // Verify address equals
  // 600 W Chicago Ave. Ste 510, Chicago, IL 60654
  await user.AddressValidation(url);

  await browser.close();
})();
