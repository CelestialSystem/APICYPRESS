describe('Taxdata documentation page', () => {
    before(() => {
        cy.visit('https://apilayer.com/marketplace/tax_data-api');
    });

    it('1. Test to accept cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Documentation" tab present', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('3. Test to click on the "Documentation" tab', () => {
        cy.get('.d-md-flex > .d-none').click();
        cy.wait(5000);
        //TODO: Added an 5-second wait to allow the documentation tab to load. A more reliable solution should be implemented to handle this wait.
    });

    it('4. Test to check the text "Tax Data API Reference" text', () => {
        cy.wait(5000);
        //TODO: Added an 5-second wait to allow the documentation tab to load. A more reliable solution should be implemented to handle this wait.
        cy.checkTextVisibility('Tax Data API Reference');
    });

    it('5. Test to check "Contents" section present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted');
    });

    it('6. Test to navigate for "Authentication" section', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4) > a', 'Authentication');
    });

    it('7. Test to navigate to "Endpoints" section', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });

    it('8. Test to navigate to "Rate Limiting" section', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a', 'Rate Limiting');
    });

    it('9. Test to navigate to "Error Codes" section', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });

    it('10. Test to click on the "Subscribe for Free" button', () => {
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
    });
});