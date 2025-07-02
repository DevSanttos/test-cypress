describe('Testes automatizados no site Pelando', () => {

    beforeEach(() => {
        cy.visit('https://www.pelando.com.br/');
    });

    // CT66: Busca por palavra-chave relacionada à categoria
    it('CT66 - Validar busca por categoria "Eletrônicos"', () => {
      cy.viewport(1280, 800);
      cy.get('form[role="search"]:visible input[name="search"]')
          .should('be.visible')
          .click()
          .type('eletrônicos{enter}');
    });

    // CT67: Verificar o menu de ordenação "Quentes de hoje"
      it('CT67 - Validar menu de ordenação "Quentes de hoje"', () => {
        cy.viewport(1280, 800);
        cy.get('#FEED_HOT')
            .click();
      });

    // CT68: Verificar o menu de ordenação “Quentes de hoje” com o filtro por loja e ocultando as promoções expiradas.
    it('CT68 - Verificar o menu de ordenação “Quentes de hoje” com o filtro"', () => {
      cy.viewport(1280, 800);
      cy.get('#FEED_HOT')
          .click();
      cy.get(':nth-child(3) > ._checkbox-wrapper_ezsup_1')
          .click();
      cy.get('.slider')
          .click()
    });

    //CT69: Verificar envio de avaliação de loja
    it('CT69 - Verificar envio de avaliação de loja"', () => {
        cy.viewport(1280, 800);
        cy.get('form[role="search"]:visible input[name="search"]')
            .should('be.visible')
            .click()
            .type('temu{enter}');
        cy.get(':nth-child(1) > ._deal-card_1jdb6_25 > ._default-deal-card-header_1mw5o_51 > ._title_mszsg_31')
            .click();
        cy.get('button[aria-label="Menu de opções da promoção"]')
            .click();
    });
});
