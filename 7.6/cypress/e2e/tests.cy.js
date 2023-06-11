describe('favorites', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('page display check', () => {
    cy.get('.navbar').should('be.visible');
  });

  it('add new book', () => {
    cy.login('test@test.com', 'test')

    cy.contains('Добро пожаловать test@test.com').should('be.visible');
    
    cy.get('.btn-warning').click();
    cy.get('#title').click();
    cy.get('#title').type("JavaScript");
    cy.get('#description').click();
    cy.get('#description').type("Программирование");
    cy.get('#authors').type("Эрик Фримен");
    cy.get('#favorite').click();
    cy.contains('Submit').click();
  });

  it('delete from favorite', () => {
    cy.login('test@test.com', 'test');

    cy.contains('Добро пожаловать test@test.com').should('be.visible');
    
    cy.contains('Delete from favorite').click();
  });

  it('add to favorite', () => {
    cy.login('test@test.com', 'test');

    cy.contains('Добро пожаловать test@test.com').should('be.visible');
    
    cy.contains('Add to favorite').click();
  });
})


  
