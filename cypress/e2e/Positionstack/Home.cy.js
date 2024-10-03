import { POSITIONSTACK_BASE_URL } from '../../resources/data';

describe('Positionstack Home page', () => {
    before(() => {
        cy.visit(POSITIONSTACK_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Positionstack" logo', () => {
        cy.componentVisiblityCheck('.logo > a > img');
    });

    it('3. Test to check the text "Accurate Forward & Reverse Batch Geocoding REST API" is present', () => {
        cy.componentVisiblityCheck('.inline > h2', 'Accurate Forward & Reverse\n                        Batch Geocoding REST API\n                     ')
    });

    it('4. Test to check "Map" in the home page', () => {
        cy.componentVisiblityCheck('.map');
    });

    it('5. Test to check "Address" section is present in the map', () => {
        cy.componentVisiblityCheck('.address');
    });

    it('6. Test to check "Country" details section is present', () => {
        cy.componentVisiblityCheck('.meta')
    });

    it('7. Test to check the "Try Demo" button is present', () => {
        cy.componentVisiblityCheck('.try_demo');
    });

    it('8. Test to check clicking the "Try Demo" button', () => {
        cy.get('.try_demo').click();
        cy.get('.container > h2').scrollIntoView();
    });

    it('9. Test to check "GET FREE API KEY" button', () => {
        cy.get('.inline > .cta').click();
    });

    it('10. Test to check the "Sign Up" text in the "Sign Up" page', () => {
        cy.componentVisiblityCheck('strong', 'Sign Up: ');
        cy.go('back');
    });

    it('11. Test to check the "API Documentation" button is present', () => {
        cy.componentVisiblityCheck('.secondary', 'API Documentation');
    });

    it('12. Test to check by clicking of the "API Documentation" button', () => {
        cy.componentVisiblityCheck('.secondary').click();
        cy.componentVisiblityCheck(':nth-child(1) > h2', 'API Documentation');
        cy.go('back');
    });

    it('13. Test to check the text "Real-Time Geocoding"', () => {
        cy.componentVisiblityCheck('.geocode > .heading', 'Real-Time Geocoding')
    });

    it('14. Test to check the text "Scalable Infrastructure"', () => {
        cy.componentVisiblityCheck('.scalable > .heading', 'Scalable Infrastructure')
    });

    it('15. Test to check the text "Worldwide Coverage" ', () => {
        cy.componentVisiblityCheck('.coverage > .heading', 'Worldwide Coverage')
    });

    it('16. Test to check text "Fair Pricing"', () => {
        cy.componentVisiblityCheck('.pricing > .heading', 'Fair Pricing')
    });

    it('17. Test to check for the text "Effortless geocoding and embeddable maps. Integration takes less than 5 minutes" is present', () => {
        cy.componentVisiblityCheck('.left_side > h2', 'Effortless geocoding and embeddable maps. Integration takes less than 5 minutes.')
    });

    it('18. Test to check for the text "Forward Geocoding" option', () => {
        cy.componentVisiblityCheck('.forward', 'Forward Geocoding');
    });

    it('19. Test to check for the text "Reverse Geocoding" option', () => {
        cy.componentVisiblityCheck('.reverse', 'Reverse Geocoding');
    });

    it('20. Test to check for the text "Batch Requests" option', () => {
        cy.componentVisiblityCheck('.batch', 'Batch Requests');
    });

    it('21. Test to check for the text "Embeddable Maps" option', () => {
        cy.componentVisiblityCheck('.maps', 'Embeddable Maps');
    });

    it('22. Test to check for the text "JSON, XML & GeoJSON" option', () => {
        cy.componentVisiblityCheck('.format', 'JSON, XML & GeoJSON');
    });

    it('23. Test to check for the text "Multiple Languages" option', () => {
        cy.componentVisiblityCheck('ul > .languages', 'Multiple Languages');
    });

    it('24. Test to check for input field of location in the "GEO CODE" section', () => {
        cy.componentVisiblityCheck('input');
    });

    it('25. Test to check "GEO CODE" button', () => {
        cy.componentVisiblityCheck('.button');
    });

    it('26. Test to check for input field of the GEO CODE" section', () => {
        cy.get('input').type('United States');
    });

    it('27. Test to check "GEO CODE" button and check the code is present', () => {
        cy.get('button').click({ multiple: true });
        cy.componentVisiblityCheck('.prettyprint');
    });

    it('28. Test to check the "Sign Up Free" button', () => {
        cy.get('.container > p > a').click();
        cy.go('back');
    });
});
