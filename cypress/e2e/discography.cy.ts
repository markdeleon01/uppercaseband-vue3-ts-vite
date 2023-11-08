// https://docs.cypress.io/api/introduction/api.html

describe('Test the discography page', () => {
  it('visits the app discography url', () => {
    cy.visit('/')
    cy.get('a[href="/discography"]').click()

    cy.get('nav').find('.router-link-exact-active').should('have.length', 1)
    cy.contains('.router-link-exact-active', 'Discography')
    cy.get('.discography').should('have.length', 1)

    cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')
    cy.contains('h2', 'Discography')
    cy.get('.release-item').should('have.length', 6)
  })
})
