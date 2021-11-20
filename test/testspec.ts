const { browser, element, by } = require("protractor");

describe("Suite", () => {
    xit("Test case 1", async() => {
        await browser.get("https://juliemr.github.io/protractor-demo/");
        await element(by.model("first")).sendKeys("11");
        await element(by.model("second")).sendKeys("7");
        await element(by.id("gobutton")).click();
        //it is optinal to write await before method chainings
        element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
            console.log(text);
        });
    })

    it("Angular home page search validation", async() => {
        await browser.get("https://angular.io/");
        await element(by.css("[type='search']")).sendKeys("Sálálá");
    });
});