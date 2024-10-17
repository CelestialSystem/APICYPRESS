import { DID_YOU_MEAN_THIS_BASE_URL } from '../../resources/data';

describe('"Did you Mean This?" API Info page', () => {
    before(() => {
        cy.visit(DID_YOU_MEAN_THIS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API Info" tab', () => {
        cy.get('#details-tab').click();
    });

    it('3. Test to check text\'s in the page', () => {
        cy.checkTextVisibility('When used together with NLP API it will be a powerful duo.');
    });

    it('4. Test to check if code blocks is present', () => {
        cy.componentVisiblityCheck('img[alt="Did you Mean This API Code Sample"]');
    });

});