/// <reference types="Cypress" />

import {authLogin} from '../../page_objects/loginObjects'
import {header} from '../../page_objects/headerObject'


describe('HTML validation', () => {
    it('singleCase', () => {
        cy.visit('/')
        header.loginButton.click()
        authLogin.email.type('lalal').then((input) => {
            console.log('ovde nam je input', input[0].validationMessage)
            expect(input[0].validationMessage).to
                .eq("Please enter a part followed by '@'. '@gmail.com' is incomplete.")
        })
        
    })
})