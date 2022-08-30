/// <reference types = "cypress" />



// hooks
// trechos que executam antes e depois do teste

// before -> antes de todos os testes
// beforeEach -> antes de cada teste
// after -> depois de todos os testes
// afterEach -> depois de cada teste




context('Space Tennis', () => {
  it('Acessando Preços', ()=> {
  //- entender o fluxo manualmente
  //- mapear os elementos que vamos interagir
  //- descrever as interações com Cypress
  //- adicionar as asserções que a gente precisa
  cy.visit('https://www.spacetennis.com.br/') 
  cy.get('#click-search > .icon').click()
  cy.get('[name=q]').type('Nike')
  cy.get('[name=submit]').click()
  cy.get(':nth-child(1) > .product__product_detail_list > .product-item-body > .figure > .w-100 > .block-img').click()
  

  })
});