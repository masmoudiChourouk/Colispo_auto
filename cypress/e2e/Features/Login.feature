Feature: Login

    Login as a user
    Scenario: login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        Then I should be redirected to the dashboard page

    Scenario Outline: login with invalid credentials
        Given I am on the login page
        When I enter email "<email>" in the email field
        And I enter password "<password>" in the password field
        And I submit the form
        Then I should see an alert message "<message>"

        Examples:
            | email                 | password | message                                                                       |
            | particulier@gmail.com | 0001     | Veuillez saisir un mot de passe valide                                        |
            | piculier@gmail.com    | 0000     | Aucun compte trouvé avec cette adresse e-mail.Veuillez vérifier votre e-mail. |
            | particulier@gmail     | 0000     | Veuillez saisir une adresse e-mail valide                                     |
            | particulier@gmail.com |                | Veuillez saisir un mot de passe                                               |
            |                             | 0000     | Veuillez saisir l'adresse e-mail                                              |
