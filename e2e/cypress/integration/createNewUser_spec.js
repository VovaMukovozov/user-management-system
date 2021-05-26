describe('Create new users', () => {
  beforeEach(() => {
    cy.exec('npm run db:reset:users')
  })

  it('Should create user with correct payload', async () => {
    cy.visit('http://localhost:3000')
    cy.get('span[class=MuiButton-label]').click()
    cy.get('input[id=email]').type('vovastern@gmail.com')
    cy.get('input[id=firstName]').type('Vova')
    cy.get('input[id=lastName]').type('Stern')
    cy.get('input[id=password]').type('1234567890asdfg')
    cy.get('input[id=description]').type('this is long long description')
    cy.get('button[data-id=submit]').click()
  })
})