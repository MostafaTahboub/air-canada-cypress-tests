Feature: Aeroplan Account Registration Functionality

  Background:
    Given the user is on the enrolment page

  Scenario: Successful registration with valid information
    When the user fills in all required account information
    And the user checks the "Read and Accepted" checkbox
    And the user clicks the "Continue" button
    And the user fills in valid personal information
    And the user clicks the "Continue" button
    And the user fills in valid contact information
    And the user agrees to the privacy policy
    And the user submits the registration form
    Then the user should see a confirmation message or their Aeroplan number

  Scenario: Verify Showing error message when email is left empty
    When the user leaves the email field empty
    And the user enters a valid password
    And the user clicks the "Continue" button
    Then the user should see an error message indicating that the email is required

  Scenario: Verify Appearance of error message for short password
    When the user enters a valid email
    And the user enters a password shorter than the required length
    And the user clicks the "Continue" button
    Then the user should see an error message about the password length requirement
