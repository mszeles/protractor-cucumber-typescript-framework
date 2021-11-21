import { After, Before, Status, World } from "@cucumber/cucumber";
import {browser} from "protractor";
Before({tags: "@calculator"}, () => {
    browser.manage().window().maximize();

});

After({tags: "@calculator"}, () => {
    console.log("Test finished");
    
});

After(async function (this: World, scenario) {
    const world = this;
    console.log("Test finished");
    if (scenario.result?.status == Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        world.attach(screenshot, "image/png");
    }
});