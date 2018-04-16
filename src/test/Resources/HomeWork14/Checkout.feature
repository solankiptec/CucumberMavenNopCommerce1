Feature: NopCommerce checkout page
  As a registered user, I can place order successfully

  @Checkout
  Scenario: User order has been processed successfully
    Given User is on register page
    And User has to fill register form with valid details
    When User select product(s)
    And Enters all valid details for checkout page
    Then User has placed order successfully
