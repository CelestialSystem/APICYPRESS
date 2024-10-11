import { BADWORDS_BASE_URL } from '../../resources/data';

describe('Bad words api Info page', () => {
    before(() => {
        cy.visit(BADWORDS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "API Info" tab is present', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('3. Test to click on the "API Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('4. Test to check for the "Code Response" window is present', () => {
        cy.componentVisiblityCheck('.w-md-50');
    });
});