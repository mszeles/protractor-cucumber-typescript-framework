const { browser, element, by } = require("protractor");

describe("Suite", () => {
    it("Test case 1", () => {
        browser.get("https://juliemr.github.io/protractor-demo/");
        element(by.name("first")).sendKeys("11");
        element(by.name("second")).sendKeys("7");
        element(by.id("gobutton")).click();
    })
});