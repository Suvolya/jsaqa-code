const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    viewportWidth: 375,
    viewportHeight: 667,
  
    viewportWidth: 1536,
    viewportHeight: 960,
  },
  
});
