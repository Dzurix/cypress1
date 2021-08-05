/// <reference types ="Cypress"/>

import {authLogin} from '../../page_objects/loginObjects'
import {header} from '../../page_objects/headerObject'
import {createGallery} from '../../page_objects/createGalleryObject'

const Locators = require('../../fixtures/Locators.json');

describe('stubovanje',()=>{

    it('Stub example', ()=> {

        cy.visit('/')
        header.registerButton.click()
        cy.get(Locators.Register.FirstName).type('Pera1')
        cy.get(Locators.Register.LastName).type('peric1')
        cy.get(Locators.Register.Email).type('pera123@test.com')
        cy.get(Locators.Register.Password).type('pera1234')
        cy.get(Locators.Register.ConfirmedPassword).type('pera1234')
        cy.get(Locators.Register.Checkbox).check
        cy.get(Locators.Register.Submit).click()

        cy.intercept(

            'POST',
            'https://gallery-api.vivifyideas.com/api/auth/register',
        

        {
            fixture : 'register_stub.json' 
        
        }


        )



})
})