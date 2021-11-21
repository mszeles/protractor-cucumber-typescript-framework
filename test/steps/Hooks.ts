import { After, Before } from "@cucumber/cucumber";
import {browser} from "protractor";

Before({tags: "@calculator"}, () => {
    browser.manage().window().maximize();

});

After({tags: "@calculator"}, () => {
    console.log("Test finished");
    
});