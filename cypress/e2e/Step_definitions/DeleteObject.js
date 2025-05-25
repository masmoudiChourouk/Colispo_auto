import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given(`I have the API endpoint`, () => {
    cy.visit('https://restful-api.dev/')
    cy.log('Navigating to the API endpoint...')
});

When(`I send a DELETE request to the API endpoint`, () => {
    cy.log('Sending DELETE request to the API endpoint...')
    cy.request('DELETE', "https://api.restful-api.dev/objects/ff80818196f2a23f019706b77a9c2867", {

    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message', "Object with id = ff80818196f2a23f019706b77a9c2867 has been deleted.")
    })
});

Then(`the response status code should be {int}`, (arg0) => {
    expect(arg0).to.eq(200)
    // [Then] Describes the expected outcome or result of the scenario.
});
