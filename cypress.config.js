const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    overwrite: true,
    timestamp: 'mmddyyyy_HHMMss',
    reportDir: 'cypress/reports/mochawesome-report',
    screenshotsFolder: 'cypress/reports/mochawesome-report/assets',
  },
  
  viewportHeight : 1080,
  viewportWidth : 1920,

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return on ('file:preprocessor', cucumber());
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: false
  },
});
