module.exports = {
  e2e: {
    testIsolation: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
      "charts": true,
      "reportPageTitle": "Cypress Report",
      "embeddedScreenshots": true,
      "inlineAssets": true
    }

  },
},
{
  "chromeOptions": {
    "args": [
      "--incognito"
    ]
  }
}
// {
//   "reporter": "cypress-mochawesome-reporter",
//   "reporterOptions": {
//     "charts": true,
//     "reportPageTitle": "Cypress Report",
//     "embeddedScreenshots": true,
//     "inlineAssets": true
//   }
// }

