import { NUMVERIFY_BASE_URL } from '../../resources/data';

describe('NumVerify Documentation page', () => {
    before(() => {
        cy.visit(NUMVERIFY_BASE_URL);
    });

    it('1. Test to naviagate to the "Tools" hyperlink and choose the "Documentation" and load the "Documentation"  page', () => {
        cy.AcceptCookies();
        cy.get('#menu > ul > :nth-child(2) > a').click();
        cy.url().should('eq', `${NUMVERIFY_BASE_URL}documentation`)
    });

    it('2. Test to check the text "Ipstack API" is present', () => {
        cy.componentVisiblityCheck('.documentation_heading > h1', 'API Documentation');
    });

    it('3. Test to check the text "API Access Key" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > :nth-child(2) > a > .doc_inner', 'API Access Key');
    });

    it('4. Test to navigate to "API Response" section', () => {
        cy.get(':nth-child(4) > a > .doc_inner').contains('API Response').click();
        cy.componentVisiblityCheck('#api_response', 'API Response');
    });

    it('5. Test to navigate to "API Access Key" section', () => {
        cy.get(':nth-child(2) > :nth-child(2) > a > .doc_inner').contains('API Access Key').click();
        cy.componentVisiblityCheck(':nth-child(5) > .section_content > .doc_heading', 'Quick Start Guide');
    });

    it('6. Test to navigate to "HTTPS Encryption" section', () => {
        cy.get(':nth-child(5) > a > .doc_inner').contains('HTTPS Encryption').click();
        cy.componentVisiblityCheck('#https','256-bit HTTPS Encryption');
    });

    it('7. Test to navigate to "JSONP Callbacks" section', () => {
        cy.get(':nth-child(7) > a > .doc_inner').contains('JSONP Callbacks').click();
        cy.componentVisiblityCheck('#jsonp_callbacks','JSONP Callbacks');
    });

    it('8. Test to navigate to "API Error Codes" section', () => {
        cy.get(':nth-child(6) > a > .doc_inner').contains('API Error Codes').click();
        cy.componentVisiblityCheck('#error_codes','API Error Codes');
    });

    it('9. Test to navigate to "JSON Formatting" section', () => {
        cy.get(':nth-child(2) > .last > a > .doc_inner').contains('JSON Formatting').click();
        cy.componentVisiblityCheck('#format','JSON Formatting');
    });

    it('10. Test to navigate to "Number Validation" section', () => {
        cy.get(':nth-child(4) > :nth-child(2) > a > .doc_inner').contains('Number Validation').click();
        cy.componentVisiblityCheck('#number_validation','Number Validation');
    });

    it('11. Test to navigate to "Countries Endpoint" section', () => {
        cy.get(':nth-child(4) > .last > a > .doc_inner').contains('Countries Endpoint').click();
        cy.componentVisiblityCheck('#country_location','Country & Location Data');
    });

    it('12. Test to navigate to "Billing Overages" section', () => {
        cy.get(':nth-child(6) > :nth-child(2) > a > .doc_inner').contains('Billing Overages').click();
        cy.componentVisiblityCheck('#billing-overages','Business Continuity - API Overages');
    });

    it('13. Test to navigate to "Platinum Support" section', () => {
        cy.get(':nth-child(6) > :nth-child(3) > a > .doc_inner').contains('Platinum Support').click();
        cy.componentVisiblityCheck('#support-section','Introducing Platinum Support - Enterprise-grade support for APILayer');
    });

    it('14. Test to check "Upgare Now" button is present', () => {
        cy.get('.platinum-btn').scrollIntoView();
        cy.componentVisiblityCheck('.platinum-btn','Upgrade now');
    });

    it('15. Test to click to "Upgare Now" button is present', () => {
        cy.get('.platinum-btn').click();
        cy.url().should('eq', `${NUMVERIFY_BASE_URL}product`);
    });
});