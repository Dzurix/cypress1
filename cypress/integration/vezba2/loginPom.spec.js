import {authLogin} from '../../page_objects/loginObjects'
import {header} from '../../page_objects/headerObject'


import (header)
describe('POM login', ()=> {

it('login and logout using POM', ()=> {

    cy.visit('/')
    cy.get('.nav-link').eq(1).click()
    authLogin.login('test123123@test.com', 'test123123')
    header.logout()

})



})