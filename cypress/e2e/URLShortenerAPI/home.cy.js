import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Home page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is present or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Header And Description" title is present', () => {
        cy.checkHeaderAndDescription('URL Shortener API','URL Shortener service with an API which provides extensive analytics backend.');
    });

    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check "Live Demo" button is present and functionality', () => {
        cy.liveDemo();
    });

    it('5. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('6. Test to check " the pricing, api info , documetation  and Reviews" tab  is present', () => {
        cy.verifyTabs();
        const extraTabs = [
            '#reviews-tab',
        ];
        cy.verifyTabs(extraTabs);
    });

    it('7. Test to check "Related products and the footer" container is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('8. Test to check on the "check the documentation" link click', () => {
        cy.checkTheDocumentation('URL Shortener API Reference');
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });
});
