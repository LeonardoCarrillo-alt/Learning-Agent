describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/login')
    cy.contains("Log in")
    cy.get("#login_gmail").type("docente@example.com")
    cy.get("#login_password").type("Docente123!")
    cy.get('button[type="submit"]').click()
  })
})