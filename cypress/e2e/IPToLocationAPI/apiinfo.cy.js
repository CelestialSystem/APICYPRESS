import {IPTOLOCATIONAPI_BASE_URL } from '../../resources/data';

describe('IP To Location API Info page', () => {
    before(() => {
      cy.visit(IPTOLOCATIONAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('3. Test to check "See it in Action!" subtitle is present', () => {
        cy.componentVisiblityCheck('article > :nth-child(3)', 'See it in Action!');
    });

    it('4. Test to check "search box" is visible', () => {
        cy.componentVisiblityCheck('article > .fluid');
    });
    
    it('5. Test to check "How do I use IP to Location API?" subtitle is present for search field', () => {
        cy.componentVisiblityCheck('article > :nth-child(5)','How do I use IP to Location API?');
    });

    it('6. Test to check "Use cases for IP to Location API" subtitle is present', () => {
        cy.componentVisiblityCheck('article > :nth-child(10)', 'Use cases for IP to Location API');
    });
    
});
