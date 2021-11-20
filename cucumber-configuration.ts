import {Config} from "protractor";
export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../test/features/Calculator.feature'],
    cucumberOpts: {
        require: [
            //'./test/steps/*.js'
            './test/steps/CalculatorSteps.js'
        ]
    }
};