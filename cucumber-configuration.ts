import {Config} from "protractor";
let reporter = require('cucumber-html-reporter');

export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
  
    },
    onComplete: () => {
        console.log("onComplete executing" + __dirname);
        var options = {
            theme: 'bootstrap',
            jsonFile: 'tmp/cucumber-report.json',
            output: 'tmp/cucumber-report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
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
    },
    specs: ['../test/features/Calculator.feature'],
    cucumberOpts: {
        tags: "@calculator",
        //formatting report
        format: "json:./cucumber-report.json",
 
        require: [
            //'./test/steps/*.js'
            './test/steps/*.js'
        ]
    }
};