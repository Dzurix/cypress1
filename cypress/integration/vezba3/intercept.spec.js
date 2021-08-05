/// <reference types="Cypress" />

import {authLogin} from '../../page_objects/loginObjects'
import {header} from '../../page_objects/headerObject'
import {createGallery } from '../../page_objects/createGalleryObject'

let galleryId

describe('vezbamo intercept', () => {
    
    
    // it('Intercept request', () => {
    //     cy.intercept(
    //         'POST', 
    //         'https://gallery-api.vivifyideas.com/api/auth/login'
    //     ).as('sucessfullLogin')
    //     cy.visit('/login')
    //     authLogin.login('test123123@test.com', 'test123123')
    //     cy.wait('@sucessfullLogin').then((interception) => {
    //         console.log('evo ga interception', interception)
    //     })

    // })

    beforeEach(() => {
        cy.visit('/')
        // cy.loginCommand('test123123@test.com', 'test123123')
        // header.logoutButton.should('be.visible')
    })

    it.only('Izvlacenje vrednosti prilikom kreiranja galerije', () =>{
        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/galleries'
        ).as('createdGallery')
        header.loginClick()
        authLogin.login('test123123@test.com', 'test123123')
        header.createGalleryClick()
        createGallery.create('random1', 'random123', 'https://tinypng.com/images/social/website.jpg')
        cy.wait('@createdGallery').then((interception) => {
            expect(interception.response.statusCode).to.eq(201)
            expect(interception.response.body).to.be.a('Object')
            console.log('created gallery interception', interception)
            galleryId = interception.response.body.id
            cy.log(galleryId)
        })
    })

    it('Posetiti novokreiranu galeriju', () => {
        cy.visit(`galleries/${galleryId}`) 
        // cy.loginCommand('test123123@test.com', 'test123123')
    })

    
})