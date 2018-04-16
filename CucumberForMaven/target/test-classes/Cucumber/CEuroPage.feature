@nope
Feature: As user i want to change currency successfully

  @Euro
  Scenario: User should able to change currency
    Given User is on euro page
    When User select valid currency
    Then User should able to change currency successfully