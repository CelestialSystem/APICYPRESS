describe('Fixers FAQs page', () => {
    before(() => {
      cy.visit('https://apilayer.com/marketplace/fixer-api');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => { 
        cy.AcceptCookies();
    });

    it('2. Test to check the "FAQs" tab present', () => {
        cy.componentVisiblityCheck('#faqs-tab > .d-md-flex > span');
    });

    it('3. Test to click on "FAQs" tab', () => {
        cy.get('#faqs-tab > .d-md-flex > span').click();
    });

    it('4. Test to click on collapse button', () => {
        cy.get('#heading-46 > .btn > [itemprop="name"]').click();
        cy.get('#heading-46 > .btn > .card-btn-toggle > .card-btn-toggle-active').should('not.be.visible');
    });
  });