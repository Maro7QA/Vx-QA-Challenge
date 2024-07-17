// require dotenv and configure
require('dotenv').config();

exports.config = {
  output: './output',
  retry: process.env.RETRY || 0,
  helpers: {
    Playwright: {
      browser: process.env.BROWSER || 'chromium',
      url: 'https://www.verivox.de',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './src/step_definitions/*.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/**/*_test.*s',
  name: 'Vx-QA-Challenge'
}