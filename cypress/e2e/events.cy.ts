// https://docs.cypress.io/api/introduction/api.html

describe('Test the events page', () => {
  it('visits the app events url', () => {
    cy.visit('/')
    cy.get('a[href="/events"]').click()

    cy.get('nav').find('.router-link-exact-active').should('have.length', 1)
    cy.contains('.router-link-exact-active', 'Events')
    cy.get('.events').should('have.length', 1)

    cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')
    cy.contains('h2', 'Events')
    cy.get('.event-item').should('have.length', 6)
  })
})
