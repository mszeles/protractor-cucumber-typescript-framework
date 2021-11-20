import { Given, When, Then } from "@cucumber/cucumber";
import { SuperCalculatorHomepage } from "../page_objects/SuperCalculatorHomepage";
import { AngularIoHomepage } from "../page_objects/AngularIoHomepage";
import chai from "chai";
let homepage: SuperCalculatorHomepage = new SuperCalculatorHomepage();
let angularHomepage: AngularIoHomepage = new AngularIoHomepage();
Given('I navigate to {string} site', async (site: string) => {
  await browser.get(site);
});

When('I add two number {string} and {string}', async (a: string, b: string) => {
  await homepage.addNumbers(Number(a), Number(b));
});

Then('the outout displayed should be {string}', async (result: string) => {
  chai.expect(await homepage.getCalculationResult()).to.equal(result);
});

When('I click on header link', async () => {
  await angularHomepage.angularLink.click();
});

When('you will navigate to angular page', async () => {
  // Write code here that turns the phrase above into concrete actions
  //return 'pending';
});

Then('you will enter {string} in the search box', async (word: string) => {
  await angularHomepage.search.sendKeys(word);
});
