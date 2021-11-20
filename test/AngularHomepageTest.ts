import { AngularIoHomepage } from "./page_objects/AngularIoHomepage";

describe("Suite ", () => {
    let homepage: AngularIoHomepage = new AngularIoHomepage();
    it("Search", async() => {
        await browser.manage().window().maximize();
        await browser.get('https://angularjs.org/');
        await homepage.angularLink.click();
        await homepage.search.sendKeys("angular");
    });

});