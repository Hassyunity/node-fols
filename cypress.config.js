const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  projectId: 'drabpw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
