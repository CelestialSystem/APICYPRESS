import { RESUME_PARSER_API } from '../../resources/data';

describe('Resume Parser API Home page', () => {
    before(() => {
        cy.visit(RESUME_PARSER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "header and Description" title is present', () => {
        cy.checkHeaderAndDescription('Resume Parser API', 'Parses any resume/CV into JSON text using Natural Language Processing (NLP) techniques.');
    });

    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check "Live Demo" button is present and clickable', () => {
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

    it('8. Test to check the "check the documentation" link is present and clickable', () => {
        cy.checkTheDocumentation('Resume Parser API Reference');
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });
});
