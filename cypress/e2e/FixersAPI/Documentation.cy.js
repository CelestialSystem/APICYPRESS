describe('Fixer Documentation Page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://apilayer.com/marketplace/fixer-api');
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Documentation" tab is present', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
        cy.wait(3000);
        //TODO // Added an 3 second wait to load Documentation tab. A more reliable solution should be implemented to handle this wait.
    });

    it('3. Test to click on the "Documentation" tab', () => {
        cy.get('.d-md-flex > .d-none').click();
        cy.wait(5000);
        //TODO // Added an 5 second wait to load a documentation tab. A more reliable solution should be implemented to handle this wait.
    });

    it('4. Test to check "Fixer API Reference" title is present', () => {
        cy.componentVisiblityCheck('h3.mb-4','Fixer API Reference');
        //TODO // Added an 4 second wait to load the webpage. A more reliable solution should be implemented to handle this wait.
        cy.wait(4000);
    });

    it('5. Test to check "Contents" section is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted');
    });

    it('6. Test to Navigate For "Authentication" section', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4) > a', 'Authentication');
    });

    it('7. Test to Navigate to "Endpoints" section', () => {
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

    it('10. Test to navigate to "Premium Location List" section', () => {
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
    });
});