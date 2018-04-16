@nope
Feature: As user i want check prise and display product successfully

  @clothing
  Scenario: User should able to check product
    Given User is on clothing page
    When User click on position and display
    Then User should able to change prise high to low and display 3 product successfully