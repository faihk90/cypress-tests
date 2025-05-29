Feature: Inventory feature

    Background: User Login
        Given I open the login page
        And I log in with "standard" user data
        When I click the login button
        Then I should be redirected to the products page



    Scenario: Sort products from high to low
        And I select "Price (high to low)"
        Then the products should be sorted by price in "desc" order

    Scenario: Sort products from low to high
        And I select "Price (low to high)"
        Then the products should be sorted by price in "asc" order


    Scenario: Sort products A to Z
        When I select "Name (A to Z)"
        Then the products should be sorted by name in "asc" order

    Scenario: Sort products Z to A
        When I select "Name (Z to A)"
        Then the products should be sorted by name in "desc" order

    Scenario: Open and close the burger menu
        When I click the burger menu button
        Then the sidebar should be visible
        When I click the close menu button
        Then the sidebar should not be visible

    Scenario: Logout from the burger menu
        When I click the burger menu button
        And I click "Logout" from the menu
        Then I should be redirected to the login page

    Scenario: Navigate to All Items from the burger menu
        When I click the burger menu button
        And I click "All Items" from the menu
        Then I should stay on the inventory page

    
    Scenario: Navigate to About from the burger menu
        When I click the burger menu button
        And I click "About" from the menu
        Then I should be redirected to the Sauce Labs site
    
    Scenario: Reset App State from the burger menu
        When I add the product "Sauce Labs Backpack" to the cart
        And I click the burger menu button
        And I click "Reset App State" from the menu
        Then the cart should be empty