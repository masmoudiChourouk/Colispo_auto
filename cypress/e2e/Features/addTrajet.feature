Feature: Add Trajet

    Background: Login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        Then I should be redirected to the dashboard page

    Scenario: Add a new trajet
        Given I am on tha dashboard
        When I click on the Add trajet button
        And I enter the trajet details
        Then I should see the trajet Added message

    Scenario: Add a new trajet with invalid credentials
        Given I am on tha dashboard
        When I click on the Add trajet button
        And I enter the trajet wrong details
        Then I should see error message

    Scenario: Add a trajet with empty required fields
        Given I am on tha dashboard
        When I click on the Add trajet button
        And I try to submit the form with empty required fields
        Then I should see error messages for the empty fields