describe('Taxdata APIs info page ', () => {
    before(() => {
        cy.visit('https://apilayer.com/marketplace/tax_data-api');
    });

    it('1. Test to accept cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "API info" tab present', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('3. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('4. Test to check for "Example Request" section', () => {
        cy.componentVisiblityCheck('article > :nth-child(3)', 'Example Request');
    });

    it('5. Test to check for "Example Response" section', () => {
        cy.componentVisiblityCheck('article > :nth-child(5)', 'Example Response');
    });
});
