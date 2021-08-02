class CreateGallery {
    get title(){
        return cy.get('#title')
    }

    get description(){
        return cy.get('#description')
    }
    get imageUrl(){

        return cy.get("input[placeholder='image url']")
    }
    get submitGallery (){

        return cy.get('.btn').eq(0)
    }

    create(title,description,imageUrl){

        this.title.type(title)
        this.description.type(description)
        this.imageUrl.type(imageUrl)
        this.submitGallery.click()
    }
}

export const createGallery = new CreateGallery()