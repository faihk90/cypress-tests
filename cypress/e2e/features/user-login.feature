Feature: Login feature

  Scenario Outline: Login with valid credentials
    Given I open the login page
    When I log in with "<userType>" user data
    Then I click the login button
    And I should be redirected to the products page

    Examples:
      | userType    |
      | standard    |
      | glitch |
      | problem     |


  Scenario Outline: Show error message for invalid login scenarios
    Given I open the login page
    When I log in with "<userType>" user data
    Then I click the login button
    Then I should see the error message for "<userType>"

    Examples:
      | userType        |
      | locked          |
      | missingUsername |
      | missingPassword |
      | invalid         |