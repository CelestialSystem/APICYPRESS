import { DID_YOU_MEAN_THIS_BASE_URL } from '../../resources/data';

describe('"Did you Mean This?" API home page', () => {
    before(() => {
        cy.visit(DID_YOU_MEAN_THIS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Did you Mean This?" API" & "Google\'s famed did you mean this feature is a powerful feature to guide your users for corrections easily. This API features a fast and convenient way to embed this feature into your application." text is present', () => {
        cy.checkHeaderAndDescription('"Did you Mean This?" API', 'Google\'s famed did you mean this feature is a powerful feature to guide your users for corrections easily. This API features a fast and convenient way to embed this feature into your application.');
    });

    it('3. Test to click and check for button "Subscribe for Free" and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Did you Mean This?" API Reference');
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