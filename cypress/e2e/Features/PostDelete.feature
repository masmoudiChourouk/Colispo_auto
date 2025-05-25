Feature: Create and Delete Object

  Scenario: Add and then delete an object from the API

    Given I have the API endpoint 
    When I send a POST request to the API endpoint  
    #Then the object should be successfully created
    When I send a DELETE requests to the API endpoint  
    Then the response status code should be 200
