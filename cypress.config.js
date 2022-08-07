const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: false,
  e2e: {
    baseUrl: "https://domain.com.au",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
