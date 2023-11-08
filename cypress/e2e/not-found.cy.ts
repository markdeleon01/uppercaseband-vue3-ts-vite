// https://docs.cypress.io/api/introduction/api.html

describe('Test the not found page', () => {
  it('visits the app not found url', () => {
    cy.visit('/')

    cy.get('nav').find('.router-link-exact-active').should('have.length', 1)
    cy.contains('.router-link-exact-active', 'Home')
    cy.get('.home').should('have.length', 1)
    cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')

    cy.visit('/blahblahblah')
    cy.get('.not-found').should('have.length', 1)
    cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'Oops!')
    cy.contains('h3', 'looking for is not here.')
    cy.get('.back').should('have.length', 1)
  })
})
