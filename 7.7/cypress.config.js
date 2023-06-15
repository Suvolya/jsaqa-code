const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "beo5dp",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
