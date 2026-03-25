Feature: AI selector spell-check demo

  Scenario: Scan missing contracts and get one AI suggestion
    Given I login to SauceDemo
    When I scan the page for missing data-test
    Then AI suggests a data-test name for the menu button