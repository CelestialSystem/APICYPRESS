import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Ipstack Documentation page', () => {
    before(() => {
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to naviagate to the "Tools" hyperlink and choose the "Documentation" and load the "Documentation"  page', () => {
        cy.AcceptCookies();
        cy.get('.main-menu > :nth-child(2)').trigger('mouseover');
        cy.get(':nth-child(2) > .submenu > :nth-child(1) > a').click({force: true});
        cy.navigateUrlwithCookies('https://ipstack.com/documentation');
    });

    it('2. Test to check the text "Ipstack API" is present', () => {
        cy.AcceptCookies();
        cy.checkTextVisibility('Ipstack API');
    });

    it('3. Test to check the text "Getting Started" is present', () => {
        cy.checkTextVisibility('Getting Started');
    });

    it('4. Test to navigate to "API Access Key" section', () => {
        cy.get('.sidebar > :nth-child(2) > a').contains('API Access Key').click();
        cy.componentVisiblityCheck('#apiaccesskey', 'API Access Key');
    });

    it('5. Test to navigate to "API Response" section', () => {
        cy.get('.sidebar > :nth-child(3) > a').contains('API Response').click();
        cy.componentVisiblityCheck('#apiresponse', 'API Response');
    });

    it('6. Test to navigate to "Available Endpoints" section', () => {
        cy.get('.sidebar > :nth-child(4) > a').contains('Available Endpoints').click();
        cy.componentVisiblityCheck('#endpoints','Available Endpoints');
    });

    it('7. Test to navigate to "Connection via HTTPS" section', () => {
        cy.get('.sidebar > :nth-child(5) > a').contains('Connection via HTTPS').click();
        cy.componentVisiblityCheck('#https','Connecting via HTTPS');
    });

    it('8. Test to navigate to "JSONP Callbacks" section', () => {
        cy.get('.sidebar > :nth-child(6) > a').contains('JSONP Callbacks').click();
        cy.componentVisiblityCheck('#jsonp','JSONP Callbacks');
    });

    it('9. Test to navigate to "Error Codes" section', () => {
        cy.get('.sidebar > :nth-child(7) > a').contains('Error Codes').click();
        cy.componentVisiblityCheck('#errors','Error Codes');
    });

    it('10.Test to check "Endpoints" section', () => {
        cy.get(':nth-child(8) > .heading').contains('Endpoints');
    });

    it('11.Test to navigate to "Standard Lookup" section', () => {
        cy.get('.sidebar > :nth-child(9) > a').contains('Standard Lookup').click();
        cy.componentVisiblityCheck('#standard','Standard IP Lookup');
    });

    it('12. Test to navigate to "Bulk Lookup" section', () => {
        cy.get('.sidebar > :nth-child(10) > a').contains('Bulk Lookup').click();
        cy.componentVisiblityCheck('#bulk','Bulk IP Lookup');
    });

    it('13. Test to navigate to "Requester Lookup" section', () => {
        cy.get('.sidebar > :nth-child(11) > a').contains('Requester Lookup').click();
        cy.componentVisiblityCheck('#requester', 'Requester IP Lookup');
    });

    it('14. Test to navigate to "Specify Output Format" section', () => {
        cy.get(':nth-child(13) > a').contains('Specify Output Format').click();
        cy.componentVisiblityCheck('#outputformat', 'Specify Output Format');
    });

    it('15. Test to navigate to "Specify Response Fields" section', () => {
        cy.get(':nth-child(14) > a').contains('Specify Response Fields').click();
        cy.componentVisiblityCheck('#fields','Specify Response Fields');
    });

    it('16. Test to navigate to "Specify Response Language" section', () => {
        cy.get(':nth-child(15) > a').contains('Specify Response Language').click();
        cy.componentVisiblityCheck('#language','Specify Response Language');
    });

    it('17. Test to navigate to "Enable Hostname Lookup" section', () => {
        cy.get(':nth-child(16) > a').contains('Enable Hostname Lookup').click();
        cy.componentVisiblityCheck('#hostname', 'Enable Hostname Lookup');
    });

    it('18. Test to navigate to "Enable Security Module" section', () => {
        cy.get(':nth-child(17) > a').contains('Enable Security Module').click();
        cy.componentVisiblityCheck('#security', 'Enable Security Module');
    });

    it('19. Test to check the text "Billing" is present', () => {
        cy.componentVisiblityCheck(':nth-child(18) > .heading','Billing');
    });

    it('20. Test to navigate to "Billing Overages" section', () => {
        cy.get(':nth-child(19) > a').contains('Billing Overages').click();
        cy.componentVisiblityCheck(':nth-child(17) > :nth-child(3)', 'What is an overage?');
    });

    it('21. Test to navigate to "Platinum Support" section', () => {
        cy.get(':nth-child(20) > a').contains('Platinum Support').click();
        cy.componentVisiblityCheck(':nth-child(18) > :nth-child(3)', 'What does Platinum Support include?');
    });

    it('22. Test to check for "Upgrade now" button and click on that', () => {
        cy.get('.platinum-btn').contains('Upgrade now').click();
        cy.navigateUrlwithCookies('https://ipstack.com/product');
        cy.go('back');
    });

    it('23. Test to check for the footer links "Documentation"', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(2) > a').click();
    });
});