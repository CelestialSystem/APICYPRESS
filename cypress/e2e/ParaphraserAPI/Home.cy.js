import { PARAPRASER_API } from '../../resources/data';

describe('Paraphraser API Home page', () => {
    before(() => {
      cy.visit(PARAPRASER_API);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
  
    it('2. Test to check "header and Description" text is present', () => {
        cy.checkHeaderAndDescription('Paraphraser API', 'Rewrite and enhance any sentence, paragraph, or article using AI, make it original content.');
    });
  
    it('3. Test to click and check for button "Subscribe for Free"', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });
  
    it('5. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });
    
    it('6. Test to check if all tabs are present', () => {
        cy.verifyTabs();
    });
   
    it('7. Test to check if "Related Products and Footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('8. Test to click "check the documentation" hyperlink is working', () => {
        cy.checkTheDocumentation('Paraphraser API Reference');
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });
  });