import {IPTOLOCATIONAPI_BASE_URL } from '../../resources/data';

describe('IP To Location API Info page', () => {
    before(() => {
      cy.visit(IPTOLOCATIONAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click({force:true});
        cy.componentVisiblityCheck('#details');
    });

    it('3. Test to check "See it in Action!" subtitle is present', () => {
        cy.checkTextVisibility('See it in Action!');
    });
    
    it('4. Test to check "How do I use IP to Location API?" subtitle is present for search field', () => {
        cy.checkTextVisibility('How do I use IP to Location API?');
    });

    it('5. Test to check "Use cases for IP to Location API" subtitle is present', () => {
        cy.checkTextVisibility('Use cases for IP to Location API');
    });
    
});
