module.exports = {
  options: {
    menu: ".hamburger-box",
    aboutUs: "text='About Us'",
  },
  footer: {
    // odd EL name. seach for text
    contactUs: 'ul[id="menu-main-navigation-1"] >> text="Contact Us"',
  },

  contactUs: {
    address: ".address",
  },
};
