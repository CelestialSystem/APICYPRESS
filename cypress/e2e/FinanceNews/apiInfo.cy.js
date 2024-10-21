import { FINANCE_NEWS_BASE_URL } from '../../resources/data';

describe('Finance News API Info page', () => {
    before(() => {
        cy.visit(FINANCE_NEWS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('3. Test to check for the title "What is the Finance News API?"', () => {
        cy.checkTextVisibility('What is the Finance News API?');
    });

    it('4. Test to check for the title "How does the Finance News API help you?"', () => {
        cy.checkTextVisibility('How does the Finance News API help you?');
    });

    it('5. Test to check for the title "Code Samples"', () => {
        cy.checkTextVisibility('Code Samples');
    });

    it('6. Test to check for the title "API Documentation"', () => {
        cy.checkTextVisibility('API Documentation');
    });
});