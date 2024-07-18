describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#submit').should('be.visible').should('be.enabled')
    cy.get('.custom-logo')
    cy.get('h2').should('contain','Test login')
  

  })
})