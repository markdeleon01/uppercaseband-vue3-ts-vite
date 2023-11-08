// https://docs.cypress.io/api/introduction/api.html

describe('Test the home page', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('.home').should('have.length', 1)
    cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')
    cy.contains('h2', 'Welcome to the Official Website!')
    cy.get('.home').find('.band-logo').should('have.length', 1)
    cy.get('.home').find('.home-content').should('have.length', 1)
    cy.get('.home').find('a').should('have.length', 3)
    cy.get('nav').find('.router-link-exact-active').should('have.length', 1)
    cy.contains('.router-link-exact-active', 'Home')
  })
})
