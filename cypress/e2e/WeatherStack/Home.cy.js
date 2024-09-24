describe('Test cases for Home page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Preventing Cypress from failing the test on uncaught exceptions
        return false;
    });

    before(() => {
        cy.visit('https://weatherstack.com/');
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for Real-Time & Historicalworld', () => {
        cy.checkTextVisibility('Real-Time & HistoricalWorld Weather Data API')
    });

    it('3. Test to click on the API info tab', () => {
        cy.checkTextVisibility('Retrieve instant, accurate weather information forany location in the world in lightweight JSON format')
    });

    it('4. Test to check Weather section visible or not ', () => {
        cy.componentVisiblityCheck('.weather_animated');
    });

    it('5. Test to check Location Visibility in the location section', () => {
        cy.componentVisiblityCheck('.location > span');
    });

    it('6. Test to check Wind Precip and Pressure details are visibile or not.', () => {
        cy.componentVisiblityCheck('.wind');
        cy.componentVisiblityCheck('.precip');
        cy.componentVisiblityCheck('.pressure');
    });

    it('7. Test to check the Start Using the API button visibility', () => {
        cy.componentVisiblityCheck('.button');
    });

    it('8. Test to check clicking the Start Using the API button', () => {
        cy.get('.button').click();
        cy.assertPathname('/signup/free');
        cy.wait(2000);
        cy.checkTextVisibility('Sign Up: Free Plan');
        cy.navigateUrlwithCookies('https://weatherstack.com/');
    });

    it('9. Test to check Happy customers sections is there or not', () => {
        cy.componentVisiblityCheck('.customers > .container > ul > :nth-child(1)');
    });

    it('10. Test to check the text Real-Time History, Forecast', () => {
        cy.checkTextVisibility('Real-Time, History, Forecast')
    });

    it('11. Test to Check the text Scalable Infrastructure', () => {
        cy.checkTextVisibility('Millions of Locations')
    });

    it('12. Test to Check Worldwide Coverage ', () => {
        cy.checkTextVisibility('Rock-Solid Uptime & Speed')
    });

    it('13. Test to Check Fair Pricing', () => {
        cy.checkTextVisibility('Start Free, Upgrade Later')
    });

    it('14. Test to Check for the text Access to Global Weather Data, Developer-friendly', () => {
        cy.checkTextVisibility('Access to Global Weather Data, Developer-friendly')
    });

     it('15. Test to click on the Curent Weather', () => {
        cy.get('.buttons > :nth-child(1) > a').click();
    });

    it('16. Test to Check the Weather History ', () => {
        cy.get('.buttons > :nth-child(2) > a').click();
    });

    it('17. Test to Check Weather Forecast', () => {
        cy.get('.buttons > :nth-child(3) > a').click();
    });

    it('18. Test to Check for the text Reliable Data Sources', () => {
        cy.checkTextVisibility('Reliable Data Sources');
    });

    it('19. Test to Check for the text Lightning-fast Response Option', () => {
        cy.checkTextVisibility('Lightning-fast Response');
    });

    it('20. Test to Check for the text Scalable Infrastructure Option', () => {
        cy.checkTextVisibility('Scalable Infrastructure');
    });

    it('21. Test to Check for the text Flexible Location Lookup', () => {
        cy.checkTextVisibility('Flexible Location Lookup');
    });

    it('22. Test to Check for the text Bank-Level Security Option', () => {
        cy.checkTextVisibility('Bank-Level Security');
    });

    it('23. Test to Check for the text Multiple Languages Option', () => {
        cy.checkTextVisibility('Extensive API Documentation');
    });

    it('24. Test to Check for Input field of the Geo Code', () => {
        cy.checkTextVisibility('Join more than 75,000 companies worldwide using the weatherstack API');
    });

    it('25. Test to Check GET FREE API ACCESS button', () => {
        cy.get('p > a').click();
        cy.assertPathname('/signup/free');
        cy.wait(2000);
        cy.checkTextVisibility('Sign Up: Free Plan');
        cy.navigateUrlwithCookies('https://weatherstack.com/');
    });
});