describe('Taxdata FAQs page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://apilayer.com/marketplace/tax_data-api');
    });

    it('1 Test to accept cookies if not already accepted', () => { 
        cy.AcceptCookies();
    });

    it('2. Test to check the "FAQs" tab', () => {
        cy.componentVisiblityCheck('#faqs-tab > .d-md-flex > span');
    });

    it('3. Test to click on "FAQs" tab', () => {
        cy.get('#faqs-tab > .d-md-flex > span').click();
    });

    it('4. Test to click on collapse button', () => {
        cy.get('#heading-63 > .btn > .card-btn-toggle > .card-btn-toggle-default').click();
        cy.get('#heading-63 > .btn > .card-btn-toggle > .card-btn-toggle-active').should('not.be.visible');
    });
  }); 