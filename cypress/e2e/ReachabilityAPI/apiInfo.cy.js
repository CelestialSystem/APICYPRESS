import { REACHABILITY_API_BASE_URL } from '../../resources/data';

describe('Reachability API Info page', () => {
    before(() => {
        cy.visit(REACHABILITY_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('3. Test to verify API info tab code sample and its active status', () => {
        // Check if the 'Details' tab pane is visible
        cy.get('#details.tab-pane.active')
            .should('be.visible');

        cy.get('img[alt="Reachability API Code Samples"]') // Using the alt attribute for selection
            .should('be.visible');
    });

    it('4. should display the correct headings', () => {
        // Check if the first heading is visible and has the correct text
        cy.get('h4').contains('What is the Reachability API?').should('be.visible');

        // Check if the second heading is visible and has the correct text
        cy.get('h4').contains('How it works').should('be.visible');
    });

    it('5. should display the correct paragraphs', () => {
        // Check if the first paragraph is visible and contains the expected text
        cy.get('p').contains('If you wish to monitor your site\'s availability frequently, or build your own HTTP site status service, this is the API you\'ll need.').should('be.visible');

        // Check if the second paragraph is visible and contains the expected text
        cy.get('p').contains('It will fetch the requested URL and return detailed information about the destination.').should('be.visible');

        // Check if the third paragraph is visible and contains the expected text
        cy.get('p').contains('What is most important about this API is, you can specify the originating country as you wish.').should('be.visible');

        // Check if the fourth paragraph is visible and contains the expected text
        cy.get('p').contains('This is especially useful for discovering network issues from different routes and build status pages accordingly.').should('be.visible');
    });

});
