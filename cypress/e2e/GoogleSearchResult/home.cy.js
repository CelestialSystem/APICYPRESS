import { GOOGLE_SEARCH_RESULT_BASE_URL } from '../../resources/data';

describe('Google search result API Home page', () => {
    before(() => {
      cy.visit(GOOGLE_SEARCH_RESULT_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Google Search Results API" & "Scrapes Google Search engine result pages (SERPs) and extracts results in JSON format." text is present', () => {
        cy.checkHeaderAndDescription('Google Search Results API', 'Scrapes Google Search engine result pages (SERPs) and extracts results in JSON format.');
    });

    it('3. Test to click and check for button "Subscribe for Free" and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Google Search Results API Reference');
    });

    it('6. Test to check if all tabs are present', () => {
        cy.verifyTabs();
    });

    it('7. Test to check if "Related Products & footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('8. Test to check if code block is present', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });
  });