import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Ipstack Home page', () => {
    before(() => {
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to check the text "Locate and Identify Website Visitors by IP Address" is present', () => {
        cy.AcceptCookies();
        cy.checkTextVisibility('Locate and Identify Website Visitors by IP Address');
    });

    it('2. Test to check the text "Starting at 100 Monthly Request for Free" present', () => {
        cy.checkTextVisibility('Starting at 100 Monthly Request for Free');
    });

    it('3. Test to check the text "G2 Leader" is present', () => {
        cy.checkTextVisibility('G2 Leader ');
    });

    it('4. Test to check the location body section is present', () => {
        cy.componentVisiblityCheck('.i_body');
    });

    it('5. Test to click on the "SEE PRICING" button', () => {
        cy.get('.options > div > .cta').contains('See Pricing').click();
        cy.go('back');
    });

    it('6. Test to check the text "What is an IP address and why you should consider IPstack" is present', () => {
        cy.checkTextVisibility('What is an IP address and why you should consider IPstack');
    });

    it('7. Test to check the text "Powerful APIs. Effortless Integration. Unlimited Possibilities." is present', () => {
        cy.checkTextVisibility('Powerful APIs. Effortless Integration. Unlimited Possibilities.');
    });

    it('8. Test to check the text "Scaling your business with IP Lookup" is present ', () => {
        cy.checkTextVisibility('Powerful APIs. Effortless Integration. Unlimited Possibilities.');
    });

    it('9. Test to check the text "IP Geolocation API Trusted Around The Globe" is present', () => {
        cy.checkTextVisibility('IP Geolocation API Trusted Around The Globe');
    });

    it('10. Test to check the text "Integrate IPstack API with your website to unlock a multitude of use cases" is present', () => {
        cy.checkTextVisibility('Integrate IPstack API with your website to unlock a multitude of use cases');
    });

    it('11. Test to click on the tab "Enhancing User Experience"', () => {
        cy.get(':nth-child(1) > .details-tab').click();
        cy.checkTextVisibility('Enhancing User Experience');
    });

    it('12. Test to click on the tab "Geo-Targeted Marketing"', () => {
        cy.get(':nth-child(2) > .details-tab').click();
        cy.checkTextVisibility('Geo-Targeted Marketing');
    });

    it('13. Test to click on the tab "Fraud Detection and Prevention"', () => {
        cy.get(':nth-child(3) > .details-tab').click();
        cy.checkTextVisibility('Fraud Detection and Prevention');
    });

     it('14. Test to click on the tab "Traffic and Website Analytics"', () => {
        cy.get(':nth-child(1) > .details-tab').click();
        cy.checkTextVisibility('Traffic and Website Analytics');
    });

    it('15. Test to click on the tab "Content Localization"', () => {
        cy.get(':nth-child(4) > .details-tab').click();
        cy.checkTextVisibility('Content Localization');
    });

    it('16. Test to click on the tab "Regulatory Compliance"', () => {
        cy.get(':nth-child(5) > .details-tab').click();
        cy.checkTextVisibility('Regulatory Compliance');
    });

    it('17. Test to click on the tab "Enhancing User Experience"', () => {
        cy.get(':nth-child(6) > .details-tab').click();
        cy.checkTextVisibility('Enhancing User Experience');
    });

    it('18. Test to click on the tab "Get Started with ipstack Our real-time geolocation API service"', () => {
        cy.checkTextVisibility('Get Started with ipstack Our real-time geolocation API service');
    });

    it('19. Test to click on the "LOCATION" tab', () => {
        cy.get('[data-tab="tab-1"] > .tab-nav').click();
        cy.checkTextVisibility('IP Address Lookup and IP Geolocation');
    });

    it('20. Test to click on the "CURRENCY" tab', () => {
        cy.get('[data-tab="tab-2"] > .tab-nav').click();
        cy.checkTextVisibility('Currency Module');
    });

    it('21. Test to click on the "TIMEZONE" tab', () => {
        cy.get('[data-tab="tab-3"] > .tab-nav').click();
        cy.checkTextVisibility('Time Zone Module');
    });

    it('22. Test to click on the "CONNECTION" tab', () => {
        cy.get('[data-tab="tab-4"] > .tab-nav').click();
        cy.checkTextVisibility('Connection Module');
    }); 

    it('23. Test to click on the "SECURITY" tab', () => {
        cy.get('[data-tab="tab-5"] > .tab-nav').click();
        cy.checkTextVisibility('Security Module');
    });

    it('24. Test to click on the "SECURITY" tab', () => {
        cy.get('[data-tab="tab-5"] > .tab-nav').click();
        cy.checkTextVisibility('Security Module');
    });

    it('25. Test to click on the "Pricing" section is present', () => {
        cy.checkTextVisibility('Pricing');
    });

    it('23. Test to click on the "Peopele speack for themselves" section is present', () => {
        cy.checkTextVisibility('People speak for themselves');
    });

    it('26. Test to click on the "Explore The Docs" button', () => {
        cy.get('.review-button').click();
        cy.go('back')
    });

    it('27. Test to click on the "Get Free API Key" button', () => {
        cy.get('.review-button-secoundary').click();
        cy.go('back')
    });

    it('28. Test to click on the "IPv4 vs IPv6" section is present', () => {
        cy.checkTextVisibility('IPv4 vs IPv6');
    });

    it('27. Test to click on the "Read the blog" button', () => {
        cy.get('.ip-banner-btn > a').click();
        cy.go('back')
    });
});