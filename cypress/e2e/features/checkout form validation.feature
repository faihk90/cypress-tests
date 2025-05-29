Feature: Checkout form validation

    Background: Navigate to checkout step one
        Given I open the login page
        And I log in with "standard" user data
        And I click the login button
        And I add the product "Sauce Labs Backpack" to the cart
        And I click on the cart icon
        And I click on the checkout button

    Scenario: Show error when all fields are empty
        When I click the continue button
        Then I should see the checkout error for "missingAll"

    Scenario: Show error when last name is missing
        When I enter the checkout information for "missingAllButFirst"
        And I click the continue button
        Then I should see the checkout error for "missingAllButFirst"

    Scenario: Show error when postal code is missing
        When I enter the checkout information for "missingPostalCode"
        And I click the continue button
        Then I should see the checkout error for "missingPostalCode"