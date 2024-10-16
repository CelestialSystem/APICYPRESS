import { ADVANCED_SCRAPER_BASE_URL } from '../../resources/data';

describe('Advanced Scraper review page', () => {
    before(() => {
        cy.visit(ADVANCED_SCRAPER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => { 
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check review tab is present', () => {
        cy.get('#reviews-tab').click();
        cy.componentVisiblityCheck('.api-reviews');
    });
});