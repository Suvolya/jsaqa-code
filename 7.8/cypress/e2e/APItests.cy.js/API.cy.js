describe('pet store', () => {
  it('Should create user', () => {
    cy.createUser({
      id: 123,
      username: 'Золушка',
    })
  })

  it('Should update user', () => {
    cy.updateUser({
      username: 'Белоснежка',
    })
  })

  it('Should delete user', () => {
    cy.request('DELETE','https://petstore.swagger.io/v2/user/Белоснежка').should((deleteResponse) => {
      expect(deleteResponse.status).to.eq(200)
    })
  })
})
  
  
  
