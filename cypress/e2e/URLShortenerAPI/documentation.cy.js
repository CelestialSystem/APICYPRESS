import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Documentation page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('3. Test to click "Documentation" tab', () => {
        cy.get('.d-md-flex > .d-none').click();
    });

    it('4. Test to check "URL Shortener API Reference" title is present', () => {
        cy.checkTextVisibility('URL Shortener API Reference');
    });

    it('5. Test to check "Contents:" is present', () => {
        cy.componentVisiblityCheck('.sticky-top > .text-muted', 'Contents:');
    });

    it('6. Test to check "Authentication" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(1) > a', 'Authentication');
    });

    it('7. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4)', 'Authentication');
    });

    it('8. Test to check "Endpoints" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(2) > a', 'Endpoints');
    });

    it('9. Test to click on "Endpoints" hyperlink and check "Endpoints" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });

    it('10. Test to check "Rate Limiting" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(3) > a', 'Rate Limiting');
    });

    it('11. Test to click on "Rate Limiting" hyperlink and check "Rate Limiting" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a', 'Rate Limiting');
    });

    it('12. Test to check "Error Codes" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(4) > a', 'Error Codes');
    });

    it('13. Test to click on "Error Codes" hyperlink and check "Error Codes" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });

    it('14. Test to check on the "development quick start guide" link is present', () => {
        cy.componentVisiblityCheck('.blockquote > p > a');
    });

    it('15. Test to check on the "development quick start guide" link click', () => {
        cy.get('.blockquote > p > a').click();
    });

    it('16. Test to check on the "Accounts page" link is present', () => {
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(5) > a');
    });

    it('17. Test to check on the "Accounts page" link click', () => {
        cy.get('.col-sm-12 > :nth-child(5) > a').click();
    });

    it('18. Test to check on the "DELETE" expandable button is present', () => {
        cy.componentVisiblityCheck('#endpointHeading1 > .mb-0 > .btn');
    });

    it('19. Test to check on the "DELETE" expandable button click', () => {
        cy.get('#endpointHeading1 > .mb-0 > .btn').click();
        cy.checkTextVisibility('Deletes a short url');
    });

    it('20. Test to check on the "GET/hash/{hash}" expandable button is present', () => {
        cy.componentVisiblityCheck('#endpointHeading2 > .mb-0 > .btn');
    });

    it('21. Test to check on the "GET/hash/{hash}" expandable button click', () => {
        cy.get('#endpointHeading2 > .mb-0 > .btn').click();
        cy.checkTextVisibility('Gets a short url\'s details');
    });

    it('22. Test to check on the "GET/hashes" expandable button is present', () => {
        cy.componentVisiblityCheck('#endpointHeading3 > .mb-0 > .btn');
    });

    it('23. Test to check on the "GET/hashes" expandable button click', () => {
        cy.get('#endpointHeading3 > .mb-0 > .btn').click();
        cy.checkTextVisibility('Gets all the short url\'s that is active');
    });

    it('24. Test to check on the "GET/stats/{hash}" expandable button is present', () => {
        cy.componentVisiblityCheck('#endpointHeading4 > .mb-0 > .btn');
    });

    it('25. Test to check on the "GET/stats/{hash}" expandable button click', () => {
        cy.get('#endpointHeading4 > .mb-0 > .btn').click();
        cy.checkTextVisibility('Gets usage stats for url');
    });

    it('26. Test to check on the "POST/hash" expandable button is present', () => {
        cy.componentVisiblityCheck('#endpointHeading5 > .mb-0 > .btn');
    });

    it('27. Test to check on the "POST/hash" expandable button click', () => {
        cy.get('#endpointHeading5 > .mb-0 > .btn').click();
        cy.checkTextVisibility('Generates a short url');
    });

    it('28. Test to check on the "Support unit" link is present', () => {
        cy.componentVisiblityCheck(':nth-child(18) > a');
    });

    it('29. Test to check on the "Support unit" link click', () => {
        cy.get(':nth-child(18) > a').click();
    });

    it('30. Test to check on the "Contact for support" link is present', () => {
        cy.componentVisiblityCheck(':nth-child(25) > a');
    });

    it('31. Test to check on the "Contact for support" link click', () => {
        cy.get(':nth-child(25) > a').click();
    });
});
