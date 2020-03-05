import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
  
    capabilities: {
    browserName: 'chrome'
  },

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [ '../features/demo.feature','../features/demo.feature/viewContentCardsSteps.ts' ],

  
  directConnect:true,
  
  cucumberOpts: {
    //tags:'@CalculatorTesting',
    format:'json:./cucumberreport.json',
    require: [
        
      './stepDefination/*.js' // accepts a glob
    ]
  },

  onComplete: () =>{
    var options = {
      theme: 'bootstrap',
      jsonFile: '../tmp/cucumberreport.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
      }
  };

  reporter.generate(options);


  }

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.

};