/// <reference types="Cypress" />

import {authLogin} from '../../page_objects/loginObjects'
import {header} from '../../page_objects/headerObject'
import {createGallery } from '../../page_objects/createGalleryObject'

let galleryId

describe('vezbamo intercept', () => {
    
    
   
    beforeEach(() => {
        cy.visit('/')
        
    })

    it.only('Intercept create gallery', () =>{
        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/galleries'
            ).as('created')
            header.loginClick()
            authLogin.login('test123123@test.com', 'test123123')
            header.createGalleryClick()
    
            cy.wait('@created').then((interception) => {
                console.log('intercepted', interception)
                expect(interception.response.statusCode).to.eq(201)
                expect(interception.response.body.message).to.eq('Successfully logged out')
                expect(interception.response.url).to.contain('logout')

            })

            

            
            
                   

              
    })

   

    
})