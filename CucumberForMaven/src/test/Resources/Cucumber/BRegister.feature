@nope
Feature: As user i want to register successfully

  @register
  Scenario: User should able to register
    Given User is on home page
    When User enter valid credential
    Then User should able to register successfully

