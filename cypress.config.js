const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://domain.com.au",
    modifyObstructiveCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
