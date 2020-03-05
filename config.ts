import {Config} from 'protractor';

export let config: Config = {
  capabilities: {
    browserName: 'chrome'
  },

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [ 'demo.feature' ],
  directConnect:true,

  cucumberOpts: {
    // require step definitions
    require: [
      'path/to/step/definitions/**/*.steps.js' // accepts a glob
    ]
  }

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.

};