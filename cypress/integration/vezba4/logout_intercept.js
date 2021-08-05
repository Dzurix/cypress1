/// <reference types="Cypress" />

import {authLogin} from '../../page_objects/loginObjects'
import {header} from '../../page_objects/headerObject'
import {createGallery } from '../../page_objects/createGalleryObject'

let galleryId

describe('vezbamo intercept', () => {
    
    
   
    beforeEach(() => {
        cy.visit('/')
        
    })

    it.only('Intercept logouta', () =>{
        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/auth/logout'
            ).as('logouted')
            header.loginClick()
            authLogin.login('test123123@test.com', 'test123123')
            header.logout()
    
            cy.wait('@logouted').then((interception) => {
                console.log('intercepted', interception)
                expect(interception.response.statusCode).to.eq(200)
                expect(interception.response.body.message).to.eq('Successfully logged out')
                expect(interception.response.url).to.contain('logout')

            })
            
                   

              
    })

   

    
})