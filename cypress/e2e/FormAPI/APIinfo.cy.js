import { FORM_API_BASE_URL } from '../../resources/data';

describe('Form API Info page', () => {
    before(() => {
      cy.visit(FORM_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Form API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Form API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('4. Test to check "How to use it" subtitle is present', () => {
         cy.checkTextVisibility('How to use it');
    });

    it('5. Test to click on "orm.codes" link', () => {
        cy.get('a').contains('form.codes').click();
    });
});
