import { IMAGETOTEXT_BASE_URL } from '../../resources/data';

describe('Image to text Home page', () => {
    before(() => {
      cy.visit(IMAGETOTEXT_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Image to Text API" & "Recognizes and reads the text embedded in images." text is present', () => {
        cy.checkHeaderAndDescription('Image to Text API', 'Recognizes and reads the text embedded in images.');
    });

    it('3. Test to click and check for button "Subscribe for Free" and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Image to Text API Reference');
    });

    it('6. Test to check if all tabs are present', () => {
        const extraTabs = [
            '#reviews-tab'
        ];
        cy.verifyTabs(extraTabs);
    });

    it('7. Test to check if "Related Products & footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('8. Test to check if code block is present', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });
  });