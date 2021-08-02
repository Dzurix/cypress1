/// <reference types="Cypress" />

describe ("Registration",() =>{

    it ("visit registration page", ()=> {
    
    cy.visit ("/register")
    cy.get('#first-name').type("34224343532")
    cy.get('.form-check-input').check()
    cy.get ('button').click()



    })
    })
    