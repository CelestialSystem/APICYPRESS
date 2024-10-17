import { APP_STORE_BASE_URL} from '../../resources/data';

describe('App store Documentation page', () => {
    before(() => {
        cy.visit(APP_STORE_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "Documentation" tab', () => {
        cy.intercept('GET', '/marketplace/app_store-api/tabs/api_docs').as('apiRequest');
        cy.get('#documentation-tab').click();
        cy.wait('@apiRequest');
        cy.componentVisiblityCheck('#documentation');
    });

    it('3. Test to check and click link "development quickstart guide."', () => {
        cy.contains('a', 'development quickstart guide').should('be.visible');
        cy.contains('a', 'development quickstart guide').click();
        cy.navigateUrlwithCookies(APP_STORE_BASE_URL);
        cy.get('#documentation-tab').click();
    });

    it('4. Test to check "Contents" section is present', () => {
        cy.checkTextVisibility('Contents');
    });

    it('5. Test to check for the text "Authentication"', () => {
        cy.checkTextVisibility('Authentication');
    });

    it('6. Test to check if the text "Endpoints" is present', () => {
        cy.checkTextVisibility('Endpoints');
    });

    it('7. Test to check if the text "Rate Limiting" is present', () => {
        cy.checkTextVisibility('Rate Limiting');
    });

    it('8. Test to check if the text "Error Codes" is present', () => {
        cy.checkTextVisibility('Error Codes');
    });

    it('9. Test to click on the "Authentication" link', () => {
        cy.get('li > a').contains('Authentication').click();
        cy.get('[name="authentication"]').should('be.visible');
    });

   it('10. Test to click on the "Endpoints" link', () => {
        cy.get('li > a').contains('Endpoints').click();
        cy.get('#endpointsAccordion').should('be.visible');
    });

    it('11. Test to click on the "Rate Limiting" link', () => {
        cy.get('li > a').contains('Rate Limiting').click();
        cy.get('[name="rate-limits"]').should('be.visible');
    });

    it('12. Test to click on the "Error Codes" link', () => {
        cy.get('li > a').contains('Error Codes').click();
        cy.get('[name="errors"]').should('be.visible');
    });

    it('13. Test to click on "Accounts Pages" link', () => {
        cy.contains('a', 'Accounts page').should('be.visible');
        cy.contains('a', 'Accounts page').click();
        cy.navigateUrlwithCookies(APP_STORE_BASE_URL);
        cy.get('#documentation-tab').click();
     });

     it('14. Test to check on "expand & collapse" click', () => {
        cy.get('#endpointHeading1 > .mb-0 > .btn').click();
        cy.get('#endpointHeading2 > .mb-0 > .btn').click();
        cy.get('#endpointHeading3 > .mb-0 > .btn').click();
        cy.get('#endpointHeading4 > .mb-0 > .btn').click();
        cy.get('#endpointHeading5 > .mb-0 > .btn').click();
        cy.get('#endpointHeading6 > .mb-0 > .btn').click();
        cy.get('#endpointHeading7 > .mb-0 > .btn').click();
        cy.get('#endpointHeading8 > .mb-0 > .btn').click();
        cy.get('#endpointHeading9 > .mb-0 > .btn').click();
        cy.get('#endpointHeading10 > .mb-0 > .btn').click();
        cy.get('#endpointHeading11 > .mb-0 > .btn').click();
     });

      it('15. Test to click the button " Subscribe for Free "', () => {
        cy.get('#subscribeButton').should('contain.text', 'Subscribe for Free').click();
        cy.get('#pricing').should('be.visible');
        cy.get('#documentation-tab').click();
    });

    it('16. Test to check and click the link "support unit" and "contact for support"', () => {
        cy.get('p > a').contains('support unit').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('support unit').should('have.attr', 'href', '/support');
        cy.get('p > a').contains('contact for support').should('have.attr', 'target', '_blank');
        cy.get('p > a').contains('contact for support').should('have.attr', 'href', '/support');
    });
});