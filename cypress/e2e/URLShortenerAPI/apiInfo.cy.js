import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Info page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('3. Test to check "What is URL Shortener?" subtitle is present', () => {
        cy.checkTextVisibility('What is URL Shortener?');
    });

    it('4. Test to check "Why you should use short URLs?" subtitle is present', () => {
        cy.checkTextVisibility('Why you should use short URLs?');
    });

    it('5. Test to check "What are features of URL Shortener API?" subtitle is present', () => {
        cy.checkTextVisibility('What are features of URL Shortener API?');
    });

    it('6. Test to check "Easy to track your content performances with URL Shortener API" subtitle is present', () => {
        cy.checkTextVisibility('Easy to track your content performances with URL Shortener API');
    });

    it('7. Test to check "Code Editor" is present', () => {
        cy.componentVisiblityCheck('.w-md-50');
    });
});
