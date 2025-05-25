//var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginElements from '../Page_objects/loginObjects';  

Given(`I am on the login page`, () => {
    cy.log ('Step 1: I am on the login page');
    cy.visit(loginElements.loginURL);
    cy.wait(2000);
    cy.get(loginElements.titlecnx).should('contain','Connexion');
});

When(`I enter valid credentials`, () => {
    cy.log ('Step 2: I enter valid credentials');
    cy.get(loginElements.email).type(loginElements.emailinput);
    cy.get(loginElements.password).type(loginElements.passwordinput);
    cy.get(loginElements.submit).click();
});

When(`I enter email {string} in the email field`, (email) => {
    if (email){
        cy.get(loginElements.email).type(email);
    } else {
        cy.get(loginElements.email).clear();
    }
});

When(`I enter password {string} in the password field`, (password) => {
    if (password){
        cy.get(loginElements.password).type(password);
    } else {
        cy.get(loginElements.password).clear();   //pour saisir un champs vide
    }
});

When(`I submit the form`, () => {
    cy.get(loginElements.submit).click();
});

Then(`I should be redirected to the dashboard page`, () => {
    cy.log ('Step 3: I should be redirected to the dashboard page');
    cy.get(loginElements.moncompte).should('contain', 'Mon compte');
});

Then(`I should see an alert message {string}`, (message) => {
    cy.get(loginElements.invalidMessage).should('be.visible').and('contain',message);
});