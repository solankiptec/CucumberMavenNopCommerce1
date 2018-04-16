Feature: NopCommerce productEmailAFriendPage
  As a registered user, I can email a friend about product

  @Email-Sent
Scenario: Only registered user can use email a friend feature

  Given User is on register page
  And User has to fill register form with valid details

  When User navigates to Build your own computer page
  And Clicks on Email A Friend Button
  And Enters all valid details for Email A Friend page

  Then User can send email successfully

  @Email-NOT-Sent
Scenario Outline: Without registering user can NOT use email a friend feature
  Given User navigates to Build your own computer page
  And Clicks on Email A Friend Button
  When Enters all valid details for Email A Friend page
  Then User NOT able to email a friend and see "<message>"
  Examples:
  |message|
  |Only registered customers can use email a friend feature|