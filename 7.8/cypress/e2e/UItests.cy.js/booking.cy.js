describe('Booking tests', () => {
    it('Unsuccessfully booked a ticket', () => {
      cy.visit('http://qamid.tmweb.ru/')
          
      cy.log('Выбираем день недели')
      cy.get('[href="#"]:nth-child(4)').click();

      cy.log('Выбираем время')
      cy.get('.movie:nth-child(1) [href="#"]').click();
        
      cy.log('Выбираем место, которое занято')
      cy.get('.buying-scheme__row:nth-child(6) > .buying-scheme__chair:nth-child(10)').click();
        
      cy.log('Проверяяем, что кнопка "Забронировать" неактивна')
      cy.get('.acceptin-button').should('be.disabled');
    })
})
