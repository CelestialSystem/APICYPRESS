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

    it('3. Test to check for the title "Usage"', () => {
        cy.checkTextVisibility('Usage');
    });
});