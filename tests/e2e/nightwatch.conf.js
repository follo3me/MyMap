/* eslint-disable no-undef */
require('@babel/register')
var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['tests/e2e/specs'],
  output_folder: 'tests/e2e/reports',
  custom_assertions_path: ['tests/e2e/custom-assertions'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'chromeOptions': {
          'args': [
            '--headless',
            '--disable-gpu',
            '--no-sandbox', // required to run without privileges in docker
            // '--disable-web-security'
          ]
        }
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
