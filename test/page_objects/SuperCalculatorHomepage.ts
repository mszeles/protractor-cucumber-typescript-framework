import { ElementFinder, element, by } from "protractor";

export class SuperCalculatorHomepage {
    static readonly firstField: ElementFinder = element(by.model("first"));
    //# means private(javascript), private also means private(typescript)
    static readonly secondField: ElementFinder = element(by.model("second"));
    static readonly goButton: ElementFinder = element(by.id("gobutton"));
    static readonly calculationResult: ElementFinder = element(by.css("h2[class='ng-binding']"));
    static readonly operatorSelector: ElementFinder = element(by.model("operator"));
    static readonly multiplicationOption: ElementFinder = element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']"));
    static readonly firstResultInHistory: ElementFinder = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    static readonly historyRows = element.all(by.repeater("result in memory"));
    static readonly calculationResultValueInTable = by.css("td:nth-child(3)");
  
    get(): void {
      browser.get('http://juliemr.github.io/protractor-demo/');
    }
  
    async addNumbers(a: number, b: number): Promise<void> {
        await this.operationOnNumbers(a, b, "ADDITION");
    }

    async setNumbers(a: number, b: number): Promise<void> {
        await SuperCalculatorHomepage.firstField.sendKeys(a);
        await SuperCalculatorHomepage.secondField.sendKeys(b);
    }

    async operationOnNumbers(a: number, b: number, operation: string) {
        await this.setNumbers(a, b);
        await SuperCalculatorHomepage.operatorSelector.element(by.css("option[value='" + operation + "']")).click();
        await SuperCalculatorHomepage.goButton.click();
    }

    multiplyNumbers(a: number, b: number): void {
        this.operationOnNumbers(a, b, "MULTIPLICATION");
    }
  
    async getCalculationResult() {
      return SuperCalculatorHomepage.calculationResult.getText();
    }

    getFirstResultInHistory() {
        return SuperCalculatorHomepage.firstResultInHistory.getText();
    }

    getHistoryRows() {
        return SuperCalculatorHomepage.historyRows;
    }

    getCalculationResultValueInTable(tableRow) {
        return tableRow.element(SuperCalculatorHomepage.calculationResultValueInTable).getText();
    }
  }