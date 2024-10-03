import { EXCHANGERATES_BASE_URL } from '../../resources/data';

describe('API Info Page', () => {
    before(() => {
        cy.visit(EXCHANGERATES_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is present or exists
        cy.AcceptCookies();
    });

    it('2. Test to check title "Exchange Rates Data API" is present', () => {
        cy.componentVisiblityCheck('.h2', 'Exchange Rates Data API');
    });

    it('3. Test to click "Api Info"', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('4. Test to check "Features" subtitle is present', () => {
        cy.componentVisiblityCheck('article > :nth-child(4)', 'Supported Symbols');
    });

    it('5. Test to check "Example Request" subtitle is present', () => {
        cy.componentVisiblityCheck('article > :nth-child(7)', 'Tips');
    });

    it('6. Test to check "Example Response" subtitle is present', () => {
        cy.get(':nth-child(11) > pre.language-shell').scrollIntoView();
        cy.componentVisiblityCheck(':nth-child(11) > pre.language-shell');
    });
}); 