/// <reference types = "cypress" />



// hooks
// trechos que executam antes e depois do teste

// before -> antes de todos os testes
// beforeEach -> antes de cada teste
// after -> depois de todos os testes
// afterEach -> depois de cada teste




context('Space Tenis', () => {
    it('Pesquisar produto', ()=> {
    //- entender o fluxo manualmente
    //- mapear os elementos que vamos interagir
    //- descrever as interações com Cypress
    //- adicionar as asserções que a gente precisa
    cy.visit('https://www.spacetennis.com.br/') 
    cy.get('#click-search').click()
    cy.get('[name=q]').type('Nike')
    cy.get('[name=submit]').click()
    cy.title == 'nike: Loja de tênis online - Comprar agora'
    
    

    
  
    })
  });