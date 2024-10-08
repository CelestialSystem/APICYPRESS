import { TAXDATA_BASE_URL } from '../../resources/data';

describe('Taxdata FAQs page', () => {
    before(() => {
      cy.visit(TAXDATA_BASE_URL);
    });

    it('1 Test to "Accept Cookies" if not already accepted', () => { 
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