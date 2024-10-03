describe('Currency Data API Info page', () => {
    before(() => {
      cy.visit('https://apilayer.com/marketplace/currency_data-api');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Currency Data API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Currency Data API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('4. Test to check "Available Endpoints" subtitle is present', () => {
        cy.componentVisiblityCheck('article > :nth-child(4)', 'Available Endpoints');
    });

    it('5. Test to check "Supported Symbols" subtitle is present', () => {
        cy.componentVisiblityCheck('article > :nth-child(6)', 'Supported Symbols');
    });

    it('6. Test to check "Tips" subtitle is present', () => {
        cy.get('article > :nth-child(13)').scrollIntoView();
        cy.componentVisiblityCheck('article > :nth-child(9)', 'Tips');
    });
});
