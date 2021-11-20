Feature: Validate calculator app functionality
    Scenario: Calculator add functionality testing
        Given I navigate to "http://juliemr.github.io/protractor-demo/" site
        When I add two number "3" and "5"
        Then the outout displayed should be "8"

    Scenario: Calculator add functionality testing
        Given I navigate to "http://juliemr.github.io/protractor-demo/" site
        When I add two number "1" and "1"
        Then the outout displayed should be "2"

    Scenario Outline: Angular js search testing
        Given I navigate to "https://angularjs.org/" site
        When I click on header link
        And you will navigate to angular page
        Then you will enter <keyword> in the search box
        Examples:
            | keyword |
            | "hello" |
            | "hell"  |
