/// <reference types="Cypress" />


describe ("Login",() =>{

it ("visit gallery page", ()=> {

cy.visit ("/")
cy.get ('.nav-link').eq(1).click()
cy.get ('#email').type('test123123@test.com')
cy.get ('#password').type('test123123')
cy.get ('button').click()
//cy.wait(500)
cy.get (".nav-link").should('have.length',4)
cy.get('.nav-link').eq(3).click()





})
})

