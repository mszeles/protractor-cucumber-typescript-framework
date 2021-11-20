import { ElementFinder, element, by } from "protractor";

export class AngularIoHomepage {
    angularLink: ElementFinder = element(by.linkText("angular.io"))
    search: ElementFinder = element(by.css("input[type='search']"));
    
  }