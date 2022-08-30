/// <reference types = "cypress" />


// hooks
// trechos que executam antes e depois do teste

// before -> antes de todos os testes
// beforeEach -> antes de cada teste
// after -> depois de todos os testes
// afterEach -> depois de cada teste

beforeEach(() => {
  cy.visit('https://www.spacetennis.com.br/') // acesando site
});


context('Space Tennis', () => {
  it('Pesquisar pelo menu de Marcas', ()=> {
  //- entender o fluxo manualmente
  //- mapear os elementos que vamos interagir
  //- descrever as interações com Cypress
  //- adicionar as asserções que a gente precisa

  cy.get(':nth-child(2) > .arrow > .h5').click()
  
  

  })
});