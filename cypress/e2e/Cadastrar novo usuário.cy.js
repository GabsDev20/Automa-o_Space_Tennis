/// <reference types = "cypress" />



// hooks
// trechos que executam antes e depois do teste

// before -> antes de todos os testes
// beforeEach -> antes de cada teste
// after -> depois de todos os testes
// afterEach -> depois de cada teste




context('Space Tennis', () => {
    it('Cadastrando usuário novo', ()=> {
    //- entender o fluxo manualmente
    //- mapear os elementos que vamos interagir
    //- descrever as interações com Cypress
    //- adicionar as asserções que a gente precisa
    cy.visit('https://www.spacetennis.com.br/') 
    cy.get('.header-user > .icon').click()
    
    //prenchendo formulário
    cy.get('#id_nome').type('Gabriel Henrique de Sousa Silva')
    cy.get('#id_cep').type('06694235')
    cy.get('#id_email').type('gab.henrique2022@gmail.com')
    cy.get('#id_numero').type(130)
    cy.get('#id_cpf').type(2240656877)
    cy.get('#id_sexo').select('Masculino')
    cy.get('#id_nascimento').type('23/04/2000')
    cy.get('#id_senha').type('Teste@321')
    cy.get('#id_senha_confirma').type('Teste@321')
    cy.get('#id_telefone1').type('1198547828')
    cy.get('#id_grupos').select('Número 41')
    cy.get('#id_logradouro').type('Rua Francisco Pires de Oliveira')
    cy.get('#id_bairro').type('Santa rita')
    cy.get('#id_cidade').type('Ponta velha')
    cy.get('#id_estado').select('Acre')
    cy.get('.form__submit').click()

    
  
    })
  });