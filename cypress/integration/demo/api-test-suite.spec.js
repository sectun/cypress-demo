const { get } = require("core-js/fn/dict")

const runOn = (browser, fn) => {
    if (Cypress.isBrowser(browser)) {
      fn()
    }
  }
  
  const ignoreOn = (browser, fn) => {
    if (!Cypress.isBrowser(browser)) {
      fn()
    }
  }

describe('Our test API Suite', () => {

    it('Login test application', () => {
      cy.visit('http://angular.realworld.io/')
      cy.contains(' Sign in ').click()
      cy.get('[formcontrolname="email"]').click().type('sedabilge1988@gmail.com')
      cy.get('[formcontrolname="password"]').click().type('kaymak1988')  
      cy.get('[type="submit"]').click()
      cy.title().should('eq', 'Conduit')
    })

    // it('Verify request & response', () => {

    //   // Create the server
    //   cy.server()
    //   // Listen requests, create aliases
    //   cy.route('POST', '**/articles').as('postArticles')

    //   cy.contains('New Article').click()
    //   cy.get('[formcontrolname="title"]').click().type('title')
    //   cy.get('[formcontrolname="description"]').click().type('description')  
    //   cy.get('[formcontrolname="body"]').click().type('This is a very nice article')  
    //   cy.contains('Publish Article').click()

    //   // Wait until call completed
    //   cy.wait('@postArticles')
    //   cy.get('@postArticles').then(xhr =>{
    //       console.log(xhr)
    //       expect(xhr.status).to.equal(200)
    //       expect(xhr.request.body.article.body).to.equal('This is a very nice article')
    //   })
    // })

    it('Verify tag list', () => {
      cy.server()
      // 3rd parameter is the provided response
      cy.route('GET', '**/tags', 'fixture:tags.json')
      cy.get('.tag-list')
      .should('contain', 'BMW')
      .and('contain', 'Mercedes')
    })
                 
})
