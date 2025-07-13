import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import TrajetObjects from '../Page_objects/AddTrajetObjects'
import dashboardElements from '../Page_objects/DashboardObjects'
import { slowCypressDown } from 'cypress-slow-down' 

slowCypressDown(700)

Given(`I am on tha dashboard`, () => {
    cy.title().should('eq', 'Accueil')
    cy.get(dashboardElements.metaDescription)
        .should('have.attr', 'content',
            'Colispo est la première plateforme au monde dédiée au covoiturage de colis entre particuliers. Notre service met en relation des personnes souhaitant expédier des colis à moindre coût et des conducteurs prêts à transporter ces envois lors de leurs trajets.');
});

When(`I click on the Add trajet button`, () => {
    cy.log('Clicking on the Add trajet button...')
    cy.get(TrajetObjects.addrouteBtnWithText).click()
    cy.wait(1000)
    cy.get(TrajetObjects.addroutecontainer).should('be.visible')
});

When(`I enter the trajet details`, () => {
    cy.log('Entering trajet details...')
    cy.get(TrajetObjects.departinput).eq(0).type('tunis, Tunisie', { delay: 200})
    cy.get(TrajetObjects.submitAddress1).first().click()
    cy.wait(500);
    cy.get(TrajetObjects.Arriveinput).eq(1).type('Lisbon, Portugal', { delay: 200}, {force: true})
    cy.get(TrajetObjects.submitAddress2).first().click()
    cy.wait(500);
    cy.get(TrajetObjects.Dateinput1).eq(0).type('2025-11-28')
    cy.get(TrajetObjects.Morninglabeldepart).click()
    cy.get(TrajetObjects.Dateinput2).eq(1).type('2025-11-29')
    cy.get(TrajetObjects.Nightlabelarrive).click()
    cy.wait(500);
    cy.get(TrajetObjects.travelmethod).click()
    cy.get(TrajetObjects.maxlengthinput).type('20')
    cy.get(TrajetObjects.maxwidthinput).type('20')
    cy.get(TrajetObjects.maxheightinput).type('20')
    cy.get(TrajetObjects.maxweight).click()
    cy.get(TrajetObjects.optioncollect1).click()
    cy.get(TrajetObjects.optioncollect2).click()
    cy.get(TrajetObjects.optioncollect3).click()
    cy.get(TrajetObjects.optioncollect4).click()
    cy.get(TrajetObjects.submitBtn).click()
    cy.wait(1000);
    

    // [When] Describes the action or event that triggers the scenario.
});

Then(`I should see the trajet Added message`, () => {
    cy.get(TrajetObjects.successMessage).should('be.visible').should('contain', 'Trajet ajouté avec succès ! Vous pouvez consulter vos trajets dans le tableau de bord dans la page "Mes trajets"'); // [Then] Describes the expected outcome or result of the scenario.
});

When(`I enter the trajet wrong details`, () => {
    cy.log('Entering trajet details...')
    cy.get(TrajetObjects.departinput).eq(0).type('hashhsjk', { delay: 150})
    cy.get(TrajetObjects.submitAddress1).first().click()
    cy.wait(500);
    cy.get(TrajetObjects.Arriveinput).eq(1).type('sdsdsdsd', { delay: 250 }, { force: true })
    cy.get(TrajetObjects.submitAddress2).first().click()
    cy.wait(500);
    cy.get(TrajetObjects.Dateinput1).eq(0).type('2025-11-28')
    cy.get(TrajetObjects.Morninglabeldepart).click()
    cy.get(TrajetObjects.Dateinput2).eq(1).type('2025-11-29')
    cy.get(TrajetObjects.Nightlabelarrive).click()
    cy.wait(500);
    cy.get(TrajetObjects.travelmethod).click()
    cy.get(TrajetObjects.maxlengthinput).type('20')
    cy.get(TrajetObjects.maxwidthinput).type('20')
    cy.get(TrajetObjects.maxheightinput).type('20')
    cy.get(TrajetObjects.maxweight).click()
    cy.get(TrajetObjects.optioncollect1).click()
    cy.get(TrajetObjects.optioncollect2).click()
    cy.get(TrajetObjects.optioncollect3).click()
    cy.get(TrajetObjects.optioncollect4).click()
    cy.get(TrajetObjects.submitBtn).click()
    cy.wait(1000);
});

Then(`I should see error message`, () => {
    cy.get(TrajetObjects.errorMessage).should('be.visible')
        .and('contain', 'Veuillez saisir et sélectionner une adresse valide');
});

When(`I try to submit the form with empty required fields`, () => {
    cy.log('Submitting form with empty required fields...')
    cy.get(TrajetObjects.submitBtn).click()
    cy.wait(1000)
});

Then(`I should see error messages for the empty fields`, () => {

     cy.get(TrajetObjects.errorMessage).should('be.visible')
         .and('contain', 'Veuillez saisir et sélectionner une adresse valide');


});
