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

    it('8. Test to check all "titles" and "subtitles" are present', () => {
        cy.checkTextVisibility('What is Input Parameters?');
        cy.checkTextVisibility('Specifying the location');
        cy.checkTextVisibility('Specifying the browser language');
        cy.checkTextVisibility('Specifying the Google Domain');
        cy.checkTextVisibility('Scraping Shopping Results');
        cy.checkTextVisibility('Emulating the mobile browser');
        cy.checkTextVisibility('Fetching similar results');
        cy.checkTextVisibility('Safe Results');
        cy.checkTextVisibility('Pagination');
    });
});
