class Header {
    get loginButton(){
        return cy.get("a[href='/login']")
    }
    get registerButton(){
        return cy.get("a[href='/register']")

    }
    get logoutButton(){
        return cy.get("a[role='button ']")

    }

    get createGallery(){

        return cy.get("a[href='/create']")
    }


    logout (){
        this.logoutButton.click()
      
    }
    loginClick (){
        this.loginButton.click()
    }

    createGalleryClick(){

        this.createGallery.click()
    }
    
}

export const header = new Header()  