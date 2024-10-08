import { WEATHERSTACK_BASE_URL } from '../../resources/data';

describe('Weatherstack Documentation page', () => {
    before(() => {
        cy.visit(WEATHERSTACK_BASE_URL);
    });

    it('1. Test to naviagate to the "Documentation" page', () => {
        cy.AcceptCookies();
        cy.get('.header > .container > ul > :nth-child(2) > a').click();
        cy.assertPathname('/documentation');
    });

    it('2. Test to check the text "Weatherstack API Documentation" is present', () => {
        cy.AcceptCookies();
        cy.checkTextVisibility('Weatherstack API Documentation');
    });

    it('3. Test to check the text "3-Step Quickstart Guide" is present', () => {
        cy.checkTextVisibility('3-Step Quickstart Guide');
    });

    it('4. Test to navigate to "API Authentication" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(1) > :nth-child(2) > a', 'API Authentication');
        cy.get('.menu > :nth-child(1) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#access_keys > h3', 'API Authentication');
    });

    it('5. Test to navigate to "HTTPS Encryption" section', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(3) > a', 'HTTPS Encryption');
        cy.get('.menu > :nth-child(1) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#https > h3', '256-bit HTTPS Encryption');
    });

    it('6. Test to navigate to "API Error Codes" section', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(4) > a', 'API Error Codes');
        cy.get(':nth-child(1) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#api_error_codes > h3', 'API Error Codes');
    });

    it('7. Test to navigate to "Current Weather" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(2) > a', 'Current Weather');
        cy.get('.menu > :nth-child(2) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#current_weather > h3', 'Current Weather');
    });

    it('8. Test to navigate to "Historical Weather" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(3) > a', 'Historical Weather');
        cy.get('.menu > :nth-child(2) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#historical_weather > h3', 'Historical Weather');
    });

    it('9. Test to navigate to "Weather Forecast" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(4) > a', 'Weather Forecast');
        cy.get('.menu > :nth-child(2) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#weather_forecast > h3', 'Weather Forecast');
    });

    it('10. Test to navigate to "Location Lookup/Autocomplete" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(5) > a', 'Location Lookup/Autocomplete');
        cy.get('.menu > :nth-child(2) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#location_lookup > h3', 'Location Lookup/Autocomplete');
    });

    it('11. Test to navigate "Query Parameter" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(2) > a', 'Query Parameter');
        cy.get('.menu > :nth-child(3) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#query_parameter > h3', 'Query Parameter');
    });

    it('12. Test to navigate to "Units parameter" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(3) > a', 'Units Parameter');
        cy.get('.menu > :nth-child(3) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#units_parameter > h3', 'Units Parameter');
    });

    it('13. Test to navigate to "Language Parameter" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(4) > a', 'Language Parameter');
        cy.get('.menu > :nth-child(3) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#language_parameter > h3', 'Language Parameter');
    });

    it('14. Test to navigate to "JSONP Callbacks" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(5) > a', 'JSONP Callbacks');
        cy.get('.menu > :nth-child(3) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#jsonp_callbacks > h3', 'JSONP Callbacks');
    });

    it('15. Test to navigate to "Billing Overages" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(2) > a', 'Billing Overages')
        cy.get('.menu > :nth-child(4) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#billing-overages', 'Business Continuity - API Overages')
    });

    it('16. Test to navigate to "Platinum Support" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(3) > a', 'Platinum Support');
        cy.get('.menu > :nth-child(4) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(16) > h3', 'What does Platinum Support include?');
    });

    it('17. Test to check "Upgrade now" button', () => {
        cy.componentVisiblityCheck('.platinum-btn');
        cy.get('.platinum-btn').click();
        cy.go('back');
    });

    it('18. Test to check "CONTACT US" button', () => {
        cy.componentVisiblityCheck('.apilayer-support');
        cy.get('p > .apilayer-support').click();
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.go('back');
    });
});
