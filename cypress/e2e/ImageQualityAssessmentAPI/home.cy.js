import { IMAGE_QUALITY_ASSESSMENT_BASE_URL } from '../../resources/data';

describe('Image Quality Assessment API Home page', () => {
    before(() => {
      cy.visit(IMAGE_QUALITY_ASSESSMENT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Image Quality Assessment API" & "Performs a blind/referenceless image spatial quality evaluator (BRISQUE) algorithm on the image and predicts an image quality score." text is present', () => {
        cy.checkHeaderAndDescription('Image Quality Assessment API', 'Performs a blind/referenceless image spatial quality evaluator (BRISQUE) algorithm on the image and predicts an image quality score.');
    });

    it('3. Test to click and check for button "Subscribe for Free" and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Image Quality Assessment API Reference');
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