Feature: Air Canada Login

  Background:
    Given user open the Air Canada login page

  Scenario: Successful login with valid credentials
    When user enters a valid registered username and password
    And click the login button
    Then user should be redirected to my account dashboard

  Scenario: Verify showing error message when leave eamil empty
    When user leaves email empty and enter password
    And click the login button
    Then user should see an error message indicating an empty email
