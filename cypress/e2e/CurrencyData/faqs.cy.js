import { CURRENCY_BASE_URL } from '../../resources/data';

describe('Currency Data FAQ page', () => {
    before(() => {
      cy.visit(CURRENCY_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => { 
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Currency Data API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Currency Data API');
    });

    it('3. Test to on click of "FAQ" button', () => {
        cy.get('#faqs-tab').click();
        cy.componentVisiblityCheck('#heading-43 > .btn');
    });

    it('4. Test to on click on collapse button', () => {
       cy.get('#heading-43 > .btn > .card-btn-toggle > .card-btn-toggle-default').click();
       cy.get('#collapse-43 > .card-body > div').should('not.be.visible');
    });
  }); 