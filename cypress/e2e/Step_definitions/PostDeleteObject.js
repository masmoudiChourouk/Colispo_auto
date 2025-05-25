import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

let createdObjectId = null;

Given('I have the API endpoint', () => {
  cy.visit('https://restful-api.dev/')
  cy.log('API endpoint ready');
});

When('I send a POST request to the API endpoint', () => {
     cy.log('Sending POST request to the API endpoint...')
    cy.request('POST', 'https://api.restful-api.dev/objects', {
        "name": "lamisss",
        "data": {
      "year": 2025,
      "price": 2500.99,
      "CPU model": "Cypress automation",
      "Hard disk size": "1 TB"
    }
}).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('name', "lamisss")
        cy.log('Response body:', JSON.stringify(response.body, null, 2))
        //cy.log(`Created object ID: ${response.body.id}`)
        createdObjectId = response.body.id
        cy.log(`Created object ID : ${createdObjectId}`)
    })
});

When('I send a DELETE requests to the API endpoint', () => {
  cy.log(`Sending DELETE request to the API endpoint...`);
  
      cy.request('DELETE', `https://api.restful-api.dev/objects/${createdObjectId}`, {

    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.include(`Object with id = ${createdObjectId} has been deleted.`)
    })
});

Then('the response status code should be {int}', (arg0) => {
  expect(arg0).to.eq(200)
});
