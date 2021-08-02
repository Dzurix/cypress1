/// <reference types ="Cypress"/>

import {authLogin} from '../../page_objects/loginObjects'
import {header} from '../../page_objects/headerObject'
import {createGallery} from '../../page_objects/createGalleryObject'

let galleryId

describe('vezbamo intercept', () => {

    // it('Intercept request', () => {

    //     cy.intercept(

    //         'POST',
    //         'https://gallery-api.vivifyideas.com/api/auth/login'

    //     ).as('sucessfullLogin')
    //     cy.visit('/login')
    //     authLogin.login('test123123@test.com', 'test123123')
    //     cy.wait('@sucessfullLogin').then((interception)=> {

    //         console.log('evo gainterception', interception)
    //     })
    // })

    it('Izvlacenje vrednosti prilikom kreiranja galerije', () => {

            cy.intercept(

                'POST',
                'https://gallery-api.vivifyideas.com/api/galleries'
            ).as('createdGallery')
            cy.visit('/')
            header.loginClick()
            authLogin.login('test123123@test.com', 'test123123')
            header.createGalleryClick()
            createGallery.create('deki', 'deki123', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg')
            cy.wait('@createdGallery').then((interception) => {

              //  console.log('created gallery interception', interception)

              galleryId = interception.response.body.id
                cy.log(galleryId)

            })

    })

    it('Posetiti novokreiranu galeriju', () => {
            cy.visit(`galleries/${galleryId}`)

    })



})