import { WHOISAPI_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Who Is API Info page', () => {
    before(() => {
        cy.visit(WHOISAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click({force:true});
        cy.componentVisiblityCheck('#details');
    });

    it('3. Test to check if title text\'s in the page', () => {
        cy.checkTextVisibility('What is Whois API?');
        cy.checkTextVisibility('How Whois API helps you?');
        cy.checkTextVisibility('See it in Action!');
        cy.checkTextVisibility('Which TLDs are supported?');
        cy.checkTextVisibility('How to start');
        cy.checkTextVisibility('How it works');
        cy.checkTextVisibility('Related Products');
    });

    it('4. Test to click on "subscribing to the service" hyperlink', () => {
        cy.get('.subscribe-action').click();
        cy.url().should('include', '/whois-api#pricing');
        cy.get('#details-tab > .d-md-flex > span').click({force:true});
    });

    it('5. Test to click on "get your API" hyperlink', () => {
        cy.get('[href="/account"]').click({force:true});
        cy.navigateUrlwithCookies(`${APILAYER_BASE_URL}/?signin`);
        cy.navigateUrlwithCookies(WHOISAPI_BASE_URL);
        cy.get('#details-tab > .d-md-flex > span').click({force:true});
    });

    it('6. Test to click on "discover potential domain names" hyperlink', () => {
        cy.get('[href="/account"]').click({force:true});
        cy.navigateUrlwithCookies(`${APILAYER_BASE_URL}/marketplace/domain_discovery-api`);
        cy.navigateUrlwithCookies(WHOISAPI_BASE_URL);
    });

}); 
