import { SPAM_CHECK_API_BASE_URL } from '../../resources/data';

describe('Spam Check API info page', () => {
    before(() => {
      cy.visit(SPAM_CHECK_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Spam Check API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Spam Check API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('4. Test to check the "code block" is available', () => {
        cy.componentVisiblityCheck('.code-response');
    });

  });