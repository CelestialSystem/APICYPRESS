import { TEXT_TO_EMOTION_BASE_URL } from '../../resources/data';

describe('Text to Emotion home page', () => {
    before(() => {
        cy.visit(TEXT_TO_EMOTION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "header and Description" text is present', () => {
        cy.checkHeaderAndDescription('Text to Emotion API', 'Discover the emotions in textual messages automatically using NLP.');
    });

    it('3. Test to click and check for button "Subscribe for Free"', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });
   
    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Text to Emotion API Reference');
    });
    
    it('6. Test to check if all tabs are present', () => {
        cy.verifyTabs();
    });
   
    it('7. Test to check if "Related Products and Footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });
    
    it('8. Test to check if code block is present', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });

});