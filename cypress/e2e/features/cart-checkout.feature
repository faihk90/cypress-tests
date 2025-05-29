Feature: Cart and Checkout functionality

  Background: User Login
    Given I open the login page
    And I log in with "standard" user data
    And I click the login button
    Then I should be redirected to the products page

  Scenario: Add a product to the cart
    When I add the product "Sauce Labs Backpack" to the cart
    And I click on the cart icon
    Then the cart should contain "Sauce Labs Backpack"

  Scenario: Remove a product from the cart
    When I add the product "Sauce Labs Backpack" to the cart
    And I click on the cart icon
    And I remove the product "Sauce Labs Backpack" from the cart
    Then the cart should not contain "Sauce Labs Backpack"

  Scenario: Add two products to the cart and remove one
    When I add the product "Sauce Labs Backpack" to the cart
    And I add the product "Sauce Labs Bike Light" to the cart
    And the cart icon should show "<expectedCount>" items
    Then I click on the cart icon
    And I remove the product "Sauce Labs Backpack" from the cart
    And the cart icon should show "<updatedCount>" items

    Examples:
      | expectedCount | updatedCount |
      | 2             | 1            |

  Scenario: Proceed to checkout from cart
    When I add the product "Sauce Labs Backpack" to the cart
    And I click on the cart icon
    And I click on the checkout button
    Then the checkout form should be displayed

  Scenario: Fill in checkout information
    When I add the product "Sauce Labs Backpack" to the cart
    And I go to checkout
    And I enter the checkout information for "default"
    Then I should be able to proceed to the next step

  Scenario: Complete the checkout process
    When I add the product "Sauce Labs Backpack" to the cart
    And I go to checkout
    And I enter the checkout information for "default"
    And I should be able to proceed to the next step
    And I click the "finish" button on the review page
    Then I should see the confirmation message


  Scenario: Cancel from the final checkout review page
    When I add the product "Sauce Labs Backpack" to the cart
    And I go to checkout
    And I enter the checkout information for "default"
    And I click the "cancel" button on the review page
    Then I should be redirected back to the cart page
