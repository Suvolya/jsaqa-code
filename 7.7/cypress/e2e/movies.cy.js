import sucsessfulScenario from '../fixtures/sucsessprofile.json';
import unsucsessfulScenarios from '../fixtures/unsucsessprofiles.json';

describe('ticket sales page', () => {

  it('Should show correct number of days', () => {
    cy.visit('http://qamid.tmweb.ru/')
    cy.get('.page-nav__day').should('have.length', 7)
  });

  sucsessfulScenario.forEach((scenario) => {
    it(scenario.name, () => {
      scenario.data.forEach((data) => {
        cy.log('Переход на страницу авторизации')
        cy.visit(data.url)

        cy.log('Ввод данных')
        cy.get('[placeholder="example@domain.xyz"]').click()
        cy.get('[placeholder="example@domain.xyz"]')
            .type(data.login)

        cy.get('[name="password"]').click()
        cy.get('[name="password"]')
            .type(data.password)

        cy.log('Клик по кнопке Авторизоваться')
        cy.get('.login__button').click()
        
        cy.log('Проверка, что появился заголовок')
        cy.get('h1').should('be.visible')

      })
    })
  })

  unsucsessfulScenarios.forEach((scenario) => {
    it(scenario.name, () => {
      scenario.data.forEach((data) => {
        cy.log('Переход на страницу авторизации')
        cy.visit(data.url)
  
        cy.log('Ввод данных')
        cy.get('[placeholder="example@domain.xyz"]').click()
        cy.get('[placeholder="example@domain.xyz"]')
            .type(data.login)
  
        cy.get('[name="password"]').click()
        cy.get('[name="password"]')
            .type(data.password)
  
        cy.log('Клик по кнопке Авторизоваться')
        cy.get('.login__button').click()
          
        cy.log('Проверка, что появилось сообщение об ошибке')
        cy.contains('Ошибка авторизации!')

      })
    })
  })
})

describe('booking', () => {
  it('successfully booked a ticket', () => {
    cy.fixture('booking').then(admin => {
      cy.log('Переход на страницу авторизации')
      cy.visit(admin.url)

      cy.log('Ввод корректных данных')
        cy.get('[placeholder="example@domain.xyz"]').type(admin.login)

        cy.get('[name="password"]').type(admin.password)

        cy.log('Клик по кнопке Авторизоваться')
        cy.get('.login__button').click()
        
        cy.log('Проверка, что появился заголовок')
        cy.get('h1').should('be.visible')

        cy.get('.conf-step__movie:nth-child(2) > .conf-step__movie-title').then(($el) => {
          const text = $el.text('Унесенные ветром')

        cy.visit('http://qamid.tmweb.ru')
        expect(text).to.contain('Унесенные ветром')

        cy.get('[href="#"]:nth-child(2)').click();
        cy.get('.movie-seances__hall:nth-child(3) [href="#"]').click();
        cy.get('.buying-scheme__row:nth-child(9) > .buying-scheme__chair:nth-child(6)').click();
        cy.get('.acceptin-button').click()
        cy.get('h2').should('have.text', 'Вы выбрали билеты:')
        
        })
    })
  }) 
})


 

  


