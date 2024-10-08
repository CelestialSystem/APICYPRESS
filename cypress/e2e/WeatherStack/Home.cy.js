import { WEATHERSTACK_BASE_URL } from '../../resources/data';

describe('Weatherstack Home page', () => {
    before(() => {
        cy.visit(WEATHERSTACK_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for text "Real-Time & HistoricalWorld Weather Data API" is present', () => {
        cy.checkTextVisibility('Real-Time & HistoricalWorld Weather Data API')
    });

    it('3. Test to check the text "Retrieve instant, accurate weather information forany location in the world in lightweight JSON format" is present', () => {
        cy.checkTextVisibility('Retrieve instant, accurate weather information forany location in the world in lightweight JSON format')
    });

    it('4. Test to check weather section is present ', () => {
        cy.componentVisiblityCheck('.weather_animated');
    });

    it('5. Test to check Location visibility in the location section', () => {
        cy.componentVisiblityCheck('.location > span');
    });

    it('6. Test to check "Wind Precip and Pressure" details are present', () => {
        cy.componentVisiblityCheck('.wind');
        cy.componentVisiblityCheck('.precip');
        cy.componentVisiblityCheck('.pressure');
    });

    it('7. Test to check the "START USING THE API" button is present', () => {
        cy.componentVisiblityCheck('.button');
    });

    it('8. Test to check clicking on the "START USING THE API" button', () => {
        cy.get('.button').click();
        cy.assertPathname('/signup/free');
        cy.checkTextVisibility('Sign Up: Free Plan');
        cy.navigateUrlwithCookies(WEATHERSTACK_BASE_URL);
    });

    it('9. Test to check "Happy Customers:" sections is presnt', () => {
        cy.componentVisiblityCheck('.customers > .container > ul > :nth-child(1)');
    });

    it('10. Test to check the text "Real-Time History, Forecast" is present', () => {
        cy.checkTextVisibility('Real-Time, History, Forecast')
    });

    it('11. Test to check the text "Millions of Locations" is present', () => {
        cy.checkTextVisibility('Millions of Locations')
    });

    it('12. Test to check "Rock-Solid Uptime & Speed" is present', () => {
        cy.checkTextVisibility('Rock-Solid Uptime & Speed')
    });

    it('13. Test to check "Start Free, Upgrade Later" is present', () => {
        cy.checkTextVisibility('Start Free, Upgrade Later')
    });

    it('14. Test to check for the text "Access to Global Weather Data, Developer-friendly" is present', () => {
        cy.checkTextVisibility('Access to Global Weather Data, Developer-friendly')
    });

    it('15. Test to click on the "Curent Weather" tab button', () => {
        cy.get('.buttons > :nth-child(1) > a').click();
    });

    it('16. Test to click on the "Weather History" tab button', () => {
        cy.get('.buttons > :nth-child(2) > a').click();
    });

    it('17. Test to click on the  "Weather Forecast" tab button', () => {
        cy.get('.buttons > :nth-child(3) > a').click();
    });

    it('18. Test to check for the text "Reliable Data Sources" is present', () => {
        cy.checkTextVisibility('Reliable Data Sources');
    });

    it('19. Test to check for the text "Lightning-fast Response" option is present', () => {
        cy.checkTextVisibility('Lightning-fast Response');
    });

    it('20. Test to check for the text "Scalable Infrastructure" option is present', () => {
        cy.checkTextVisibility('Scalable Infrastructure');
    });

    it('21. Test to check for the text "Flexible Location Lookup" is present', () => {
        cy.checkTextVisibility('Flexible Location Lookup');
    });

    it('22. Test to check for the text "Bank-Level Security" option is present', () => {
        cy.checkTextVisibility('Bank-Level Security');
    });

    it('23. Test to check for the text "Extensive API Documentation" is present', () => {
        cy.checkTextVisibility('Extensive API Documentation');
    });

    it('24. Test to check for the text "Join more than 75,000 companies worldwide using the weatherstack API" is present', () => {
        cy.checkTextVisibility('Join more than 75,000 companies worldwide using the weatherstack API');
    });

    it('25. Test to check "GET FREE API ACCESS" button', () => {
        cy.get('p > a').click();
        cy.assertPathname('/signup/free');
        cy.checkTextVisibility('Sign Up: Free Plan');
        cy.navigateUrlwithCookies(WEATHERSTACK_BASE_URL);
    });
});