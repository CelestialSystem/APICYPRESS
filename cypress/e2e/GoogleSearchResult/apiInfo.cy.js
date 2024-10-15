import { GOOGLE_SEARCH_RESULT_BASE_URL } from '../../resources/data';

describe('Google search result API Info page', () => {
    before(() => {
      cy.visit(GOOGLE_SEARCH_RESULT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('3. Test to check "What is Google Search Results API?" subtitle is present', () => {
        cy.checkTextVisibility('What is Google Search Results API?');
    });

    it('4. Test to check "What is use cases for Google Search API?" subtitle is present', () => {
        cy.checkTextVisibility('What is use cases for Google Search API?');
    });

    it('5. Test to check "How to try Google Search API?" subtitle is present', () => {
        cy.checkTextVisibility('How to try Google Search API?');
    });

    
    it('6. Test to check "Sample code" subtitle is present', () => {
        cy.checkTextVisibility('Sample code');
    });

    it('7. Test to check "Code example" windows are present', () => {
        cy.get('img[alt="Google Search Results API"]').should('be.visible');
    });

    it('8. Test to check "Related Articles" subtitle and artcle container are present', () => {
        cy.checkTextVisibility('Related Articles');
        cy.componentVisiblityCheck('.card-deck');
    });
});
