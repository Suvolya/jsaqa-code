// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', (user) => {
    cy.request({
        method: 'POST',
        url:'https://petstore.swagger.io/v2/user',
        body:{
            "id": 123,
            "username": "Золушка",
            "firstName": "Зоя",
            "lastName": "Панфилова",
            "email": "email@email.ru",
            "password": "password",
            "phone": "phone",
            "userStatus": 0
          },
        }).then((response) => {
            expect(response.status).eq(200)
            expect(response.body).eql({
                "code":200,
                "type": "unknown",
                "message": "123"
            })
        })
    })

    Cypress.Commands.add('updateUser', (user) => {
        cy.request({
            method: 'PUT',
            url:'https://petstore.swagger.io/v2/user/username',
            body:{
                "id": 0,
                "username": "Белоснежка",
                "firstName": "Зоя",
                "lastName": "Панфилова",
                "email": "email@email.ru",
                "password": "password",
                "phone": "phone",
                "userStatus": 0
              },
            }).then((response) => {
                expect(response.status).eq(200)
            })
        })
