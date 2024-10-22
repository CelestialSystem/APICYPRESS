import { APP_STORE_BASE_URL } from '../../resources/data';

describe('App store Home page', () => {
    before(() => {
        cy.visit(APP_STORE_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "App Store API" title is present', () => {
        cy.checkTextVisibility('App Store API');
    });

    it('3. Test to check if "description" text is present', () => {
        cy.checkTextVisibility('Unofficial API to scrape and parse the application data from the iTunes/Mac App Store.');
    });

    it('4. Test to click and check for button "Subscribe for Free"', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('5. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('6. Test to check on "Code example" window is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('7. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('App Store API Reference');
    });

    it('8. Test to check if all tabs are present', () => {
        cy.verifyTabs();
    });

    it('9. Test to check if "Related Products & footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });
});