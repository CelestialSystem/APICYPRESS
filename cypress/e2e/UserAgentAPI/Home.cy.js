import { USER_AGENT_BASE_URL } from '../../resources/data';

describe('User Agent home page', () => {
    before(() => {
        cy.visit(USER_AGENT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "header and Description" text is present', () => {
        cy.checkHeaderAndDescription('User Agent API','Detect any browser, device & OS from user agent strings and generate new ones randomly.');
    });

    it('3. Test to click and check for button "Subscribe for Free"', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });
   
    it('5. Test to click link "check the documentation."', () => {
       cy.checkTheDocumentation('User Agent API Reference');
    });
    
    it('6. Test to check if all tabs are present', () => {
        cy.verifyTabs();
        const extraTabs = [
            '#reviews-tab',
        ];
        cy.verifyTabs(extraTabs);
    });
   
    it('7. Test to check if "related products and the footer" are present', () => {
        cy.checkRelatedProductAndFooter();
    });
    
    it('8. Test to check if code block is present', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });

});