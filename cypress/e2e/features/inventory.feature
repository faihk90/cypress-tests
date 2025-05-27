Feature: Inventory feature

    Background: User Login
        Given I open the login page
        When I enter username "<username>" and password "<password>"
        Then I should be redirected to the products page
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |


    Scenario: Sort products by price from highest to lowest
        When I click on the sort dropdown
        And I select "Price (high to low)"
        Then the products should be displayed in descending order by price