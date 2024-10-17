import { APP_STORE_BASE_URL } from '../../resources/data';

describe('App store API Info page', () => {
    before(() => {
        cy.visit(APP_STORE_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('3. Test to check for the title "Usage" and availibility of two urls', () => {
        cy.checkTextVisibility('Usage');
        cy.checkTextVisibility('/app: Fetches information of any app using app id.');
        cy.checkTextVisibility('/developer/apps: Fetches the list of apps for any given developer');
    });
});