const settings = {
  name: "chamber-of-commerce",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      'name': "Chamber-of-Commerce-theme"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://jsnation2020.frontity.org/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
