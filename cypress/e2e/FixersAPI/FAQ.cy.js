describe('Documentation Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://apilayer.com/marketplace/fixer-api');
    });
  
    it('0. Test to Accept Cookies if not already accepted', () => { 
        cy.AcceptCookies();
    });
  
    it('1. Test to check the FAQs tab', () => {
        cy.componentVisiblityCheck('#faqs-tab > .d-md-flex > span');
    });

    it('2. Test to click on FAQ tab', () => {
        cy.get('#faqs-tab > .d-md-flex > span').click();
    });

    it('3. Test to on click on collapse button', () => {
        cy.get('#heading-46 > .btn > [itemprop="name"]').click();
        cy.get('#heading-46 > .btn > .card-btn-toggle > .card-btn-toggle-active').should('not.be.visible');
    });
  }); 