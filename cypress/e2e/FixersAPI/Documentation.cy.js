import { FIXER_BASE_URL } from '../../resources/data';

describe('Fixer Documentation page', () => {
    before(() => {
        cy.visit(FIXER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Documentation" tab is present', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('3. Test to click on the "Documentation" tab', () => {
        cy.intercept('GET', '/marketplace/fixer-api/tabs/api_docs').as('apiRequest');
        cy.get('.d-md-flex > .d-none').click();
        cy.wait('@apiRequest');
    });

    it('4. Test to check "Fixer API Reference" title is present', () => {
        cy.componentVisiblityCheck('h3.mb-4','Fixer API Reference');
    });

    it('5. Test to check "Contents" section is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted');
    });

    it('6. Test to navigate For "Authentication" section', () => {
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

    it('10. Test to navigate to "Premium Location List" section', () => {
        cy.get('#endpointCollapse1 > .card-body > #subscribeButton').click();
    });
});