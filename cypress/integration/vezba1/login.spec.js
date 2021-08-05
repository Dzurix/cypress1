/// <reference types="Cypress" />
describe("Login", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
        cy.url().should('contains', 'gallery-app')
    })
  it('Click on login button', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(1).should('be.visible').click()

    })
    it('Login with valid data', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(1).should('be.visible').click()
    cy.url().should('contains','login')
    cy.get('h1').should('have.text', 'Please login')
    cy.get('#email').type('test123123@test.com')
    cy.get('#password').type('test123123')
    cy.get('button').should('be.visible').and('have.css','color','rgb(255, 255, 255)')
    
            .and('have.css','background-color','rgb(72, 73, 75)').click()
    })
    it('Logout', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(1).click()
    cy.get('#email').type('test123123@test.com')
    cy.get('#password').type('test123123')
    cy.get('button').click()
    //cy.wait(500)
    cy.get('.nav-link').should('have.length', 4)
    cy.get('.nav-link').should('have.css','padding','8px')
    .and('have.css','background-color','rgba(0, 0, 0, 0)').eq(3).click()
    })
  })
