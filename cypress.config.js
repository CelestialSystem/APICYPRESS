module.exports = {
  e2e: {
    //Added the viewport width and height
    viewportWidth: 1920,
    viewportHeight: 1080,
    testIsolation: false,
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

