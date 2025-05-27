Feature: Login feature

  Scenario Outline: Login with valid credentials
    Given I open the login page
    When I enter username "<username>" and password "<password>"
    Then I click the login button
    And I should be redirected to the products page

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | problem_user            | secret_sauce |


  Scenario Outline: Login with invalid credentials
    Given I open the login page
    When I enter username "<username>" and password "<password>"
    Then I click the login button
    And I should see a login error "<message>" message

    Examples:
      | username        | password     | message                                                                   |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
      |                 | secret_sauce | Epic sadface: Username is required                                        |
      | standard_user   |              | Epic sadface: Password is required                                        |
      | invalid_user    | wrong_pass   | Epic sadface: Username and password do not match any user in this service |
