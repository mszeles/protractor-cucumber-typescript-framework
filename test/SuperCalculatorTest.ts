import { SuperCalculatorHomepage } from "./page_objects/SuperCalculatorHomepage";

describe("Suite", () => {
    let homepage: SuperCalculatorHomepage = new SuperCalculatorHomepage();
    it("Add 2 values", async() => {

        //When automating non-angular applications with Protractor
        // browser.waitForAngularEnabled(false);
        // browser.get("http://google.com");
        homepage.get();
        homepage.addNumbers(12, 10);
        //real output will display only when you resolve promise
        homepage.getCalculationResult().then(function(text) {
            console.log(text);
        });
        //Jasmine takes care of resolving promises
        expect(homepage.getCalculationResult()).toBe("22");
        expect(homepage.getCalculationResult()).toEqual("22");
        expect(homepage.getCalculationResult()).not.toBe("23");
    });

    it("Chain locator", async() => {
        homepage.get();
        homepage.addNumbers(12, 10);
        //Chain locator
        homepage.getFirstResultInHistory().then(function(text) {
            console.log(text);
        });
    });

    it("Select", async() => {
        homepage.get();
        homepage.multiplyNumbers(10, 12);
        //Chain locator (defined in Page Object)
        expect(homepage.getFirstResultInHistory()).toBe("120");
    });

    it("Selecting multiple elements", async() => {
        homepage.get();
        for(let i = 1; i < 4; i++) {
            homepage.addNumbers(i, i);
        }
        //Chain locator
        let e = homepage.getHistoryRows();
        expect(e.count()).toBe(3);
        e.each(function(item) {
            homepage.getCalculationResultValueInTable(item).then( function(text) {
                console.log(text);
            });
        });
        expect(homepage.getCalculationResultValueInTable(e.first())).toBe("6");
        expect(homepage.getCalculationResultValueInTable(e.last())).toBe("2");
        expect(homepage.getCalculationResultValueInTable(e.get(2))).toBe("2");
    });
});