Feature: NopCommerce Register Page
  In order to register new user successfully user needs to fill register page with valid details
  So that user can use all the functionality of NopCommerce

  @Register
  Scenario: User should registered successfully

    Given User is on register page

    When User has to fill register form with valid details

    Then User registered successfully and see the message "Your registration completed"