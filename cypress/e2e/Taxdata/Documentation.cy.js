describe('Taxdata Documentation Page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://apilayer.com/marketplace/tax_data-api');
    });

    it('0. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('1. Test to check for the Documentation tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('2. Test to click on the Documentation tab', () => {
        cy.get('.d-md-flex > .d-none').click();
        cy.wait(4000);
    });

    it('3. Test to check the text Tax Data API Reference', () => {
        cy.wait(2000);
        cy.checkTextVisibility('Tax Data API Reference');
    });

    it('4. Test to check contents section is there or not', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted');
    });

    it('5. Test to Navigate For Authentication', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4) > a', 'Authentication');
    });

    it('6. Test to Navigate to Endpoints', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });

    it('7. Test to navigate to Rate Limiting', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a', 'Rate Limiting');
    });

    it('8. Test to navigate to Error Codes', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });

    it('9. Test to click on the Subscribe for Free button', () => {
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
    });
});