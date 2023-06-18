describe('pet store', () => {

    it('Should get user by username', () => {
        cy.request('https://petstore.swagger.io/v2/user/Золушка').then((getResponse) => {
            expect(getResponse.status).eq(200),
            expect(getResponse.body).eql({
                "id": 123,
                "username": "Золушка",
                "firstName": "Зоя",
                "lastName": "Панфилова",
                "email": "email@email.ru",
                "password": "password",
                "phone": "phone",
                "userStatus": 0
            })
        })
    })
})