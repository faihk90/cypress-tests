Feature: Checkout form validation

    Background: Navigate to checkout step one
        Given I open the login page
        When I enter username "standard_user" and password "secret_sauce"
        And I click the login button
        And I add the product "Sauce Labs Backpack" to the cart
        And I click on the cart icon
        And I click on the checkout button

    Scenario: Show error when all fields are empty
        When I click the continue button
        Then I should see an error message "Error: First Name is required"

    Scenario: Show error when last name is missing
        When I enter first name "Fotini" and leave last name and postal code empty
        And I click the continue button
        Then I should see an error message "Error: Last Name is required"

    Scenario: Show error when postal code is missing
        When I enter first name "Fotini" and last name "Tester" but leave postal code empty
        And I click the continue button
        Then I should see an error message "Error: Postal Code is required"
