/// <reference types="Cypress" />

import { authLogin } from '../../page_objects/loginObject'
import { header } from '../../page_objects/headerObject'



describe('vezbamo cy each', () => {
    
    it("each primer", () => {
        cy.visit('/')
        header.loginClick()
        authLogin.login('test123123@test.com', 'test123123')
       cy.get('.cell').each((element, index, list) => {
           console.log('ovo je element', element)
        //    console.log('ovo je index', index)
        //    console.log('ovo je list', list)
       })
       
    })

    
})