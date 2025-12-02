const { defineConfig } = require('cypress'); 

module.exports = defineConfig({
  e2e: {
   
    baseUrl: 'https://www.saucedemo.com',

    screenshotOnRunFailure: false,

    video: false,

    pageLoadTimeout: 60000,

    defaultCommandTimeout: 8000,

    viewportWidth: 1000,  

    viewportHeight: 660,
    
    setupNodeEvents(on, config) {

      on('before:browser:launch', (browser = {}, launchOptions) => {

        if (browser.name === 'chrome') {
          
        launchOptions.args.push('--force-device-scale-factor=1');
        
        launchOptions.args.push('--window-size=600,300');
        
          launchOptions.args.push('--disable-infobars');
        }
        return launchOptions;
      });
    
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});