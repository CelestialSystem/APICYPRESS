import { NUMBERVERIFICATION_BASE_URL } from '../../resources/data';

describe('Number Verification Home page', () => {
    before(() => {
      cy.visit(NUMBERVERIFICATION_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
  
    it('2. Test to check title "header and Description" is present', () => {
        cy.checkHeaderAndDescription('Number Verification API', 'Global Phone Number Validation & Lookup JSON API.');
    });
  
    it('3. Test to click and check for button "Subscribe for Free"', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });
  
    it('5. Test to check "Code example"  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('6. Test to check if all tabs are present', () => {
        cy.verifyTabs();
        const extraTabs = [
            '#reviews-tab',
            '#faqs-tab'
        ];
        cy.verifyTabs(extraTabs);
    });

    it('7. Test to check if "Related Products and Footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });
    
    it('8. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });
  }); 