describe('Test cases for Home page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Preventing Cypress from failing the test on uncaught exceptions
        return false;
    });

    before(() => {
        cy.visit('https://positionstack.com/');
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the Position Stack Logo', () => {
        cy.componentVisiblityCheck('.logo > a > img');
    });

    it('3. Test to click on the API info tab', () => {
        cy.componentVisiblityCheck('.inline > h2', 'Accurate Forward & Reverse\n                        Batch Geocoding REST API\n                     ')
    });

    it('4. Test to check ', () => {
        cy.componentVisiblityCheck('.map');
    });

    it('5. Test to check Address Visibility in the map', () => {
        cy.componentVisiblityCheck('.address');
    });

    it('6. Test to check Country detals.', () => {
        cy.componentVisiblityCheck('.meta')
    });

    it('7. Test to check the Try demo button visibility', () => {
        cy.componentVisiblityCheck('.try_demo');
    });

    it('8. Test to check clicking the Try demo button', () => {
        cy.get('.try_demo').click();
        cy.get('.container > h2').scrollIntoView();
    });

    it('9. Test to check Get Free API key', () => {
        cy.get('.inline > .cta').click();
    });

    it('10. Test to Signup page', () => {
        cy.componentVisiblityCheck('strong', 'Sign Up: ');
        cy.go('back');
    });

    it('11. Test to Check the visibility of the API documentation button', () => {
        cy.componentVisiblityCheck('.secondary', 'API Documentation');
    });

    it('12. Test to Check by clicking of the API documentation button', () => {
        cy.componentVisiblityCheck('.secondary').click();
        cy.componentVisiblityCheck(':nth-child(1) > h2', 'API Documentation');
        cy.go('back');
    });

    it('13. Test to check the text Real-Time Geocoding', () => {
        cy.componentVisiblityCheck('.geocode > .heading', 'Real-Time Geocoding')
    });

    it('14. Test to Check the text Scalable Infrastructure', () => {
        cy.componentVisiblityCheck('.scalable > .heading', 'Scalable Infrastructure')
    });

    it('15. Test to Check Worldwide Coverage ', () => {
        cy.componentVisiblityCheck('.coverage > .heading', 'Worldwide Coverage')
    });

    it('16. Test to Check Fair Pricing', () => {
        cy.componentVisiblityCheck('.pricing > .heading', 'Fair Pricing')
    });

    it('17. Test to Check for the text Effortles geocoding ad embeded maps', () => {
        cy.componentVisiblityCheck('.left_side > h2', 'Effortless geocoding and embeddable maps. Integration takes less than 5 minutes.')
    });

    it('18. Test to Check for the text Forward Geocoding Option', () => {
        cy.componentVisiblityCheck('.forward', 'Forward Geocoding');
    });

    it('19. Test to Check for the text Reverse Geocoding Option', () => {
        cy.componentVisiblityCheck('.reverse', 'Reverse Geocoding');
    });

    it('20. Test to Check for the text Batch Requests Option', () => {
        cy.componentVisiblityCheck('.batch', 'Batch Requests');
    });

    it('21. Test to Check for the text Embeddable Maps Option', () => {
        cy.componentVisiblityCheck('.maps', 'Embeddable Maps');
    });

    it('22. Test to Check for the text JSON, XML & GeoJSON Option', () => {
        cy.componentVisiblityCheck('.format', 'JSON, XML & GeoJSON');
    });

    it('23. Test to Check for the text Multiple Languages Option', () => {
        cy.componentVisiblityCheck('ul > .languages', 'Multiple Languages');
    });

    it('24. Test to Check for Input field of the Geo Code', () => {
        cy.componentVisiblityCheck('input');
    });

    it('25. Test to Check GEO CODE button', () => {
        cy.componentVisiblityCheck('.button');
    });

    it('26. Test to Check for Input field of the Geo Code', () => {
        cy.get('input').type('United States');
    });

    it('27. Test to Check GEO CODE button and check the code visibility', () => {
        cy.get('button').click({ multiple: true });
        cy.componentVisiblityCheck('.prettyprint');
    });

    it('28. Test to check the Signup Free button', () => {
        cy.get('.container > p > a').click();
        cy.go('back');
    });
});
