import { SCREESHOTLAYER_BASE_URL } from '../../resources/data';

describe('ScreenshotLayer Affiliate page', () => {
    before(() => {
        cy.visit(SCREESHOTLAYER_BASE_URL);
    });
    
    it('1. Test to naviagate to the "Affiliates" page', () => {
        cy.AcceptCookies();
        cy.get('#menu > ul > :nth-child(3) > a').click();
    });

    it('2. Test to check for the text "Earn Passive Income with Screenshotlayer Affiliate Program" is present', () => {
        cy.AcceptCookies();
        cy.checkTextVisibility('Earn Passive Income with Screenshotlayer Affiliate Program');
    });

    it('3. Test to check for the "Earn Commissions by Promoting the Screenshotlayer API." is present', () => {
        cy.checkTextVisibility('Earn Commissions by Promoting the Screenshotlayer API.');
    });

    it('4. Test to check for the "Apply now" button is present', () => {
        cy.checkTextVisibility('Apply Now');
    });

    it('5. Test to  check for the "Why Join the Screenshotlayer Affiliate Program?" is present ', () => {
        cy.checkTextVisibility('Why Join the Screenshotlayer Affiliate Program?');
    });

    it('6. Test to check for the text "Simplify Promotion with Comprehensive Resources" is present', () => {
        cy.checkTextVisibility("Simplify Promotion with Comprehensive Resources")
    });

    it('7. Test to check the text "Boost Your Income and Partner with a Leader" is present', () => {
        cy.checkTextVisibility("Boost Your Income and Partner with a Leader")
    });

    it('8. Test to  check for the options text "Seamless Integration and Effortless Tracking" is present', () => {
        cy.checkTextVisibility("Seamless Integration and Effortless Tracking")
    });

    it('9. Test to check for the options text "Dedicated Support and Performance Rewards" is present', () => {
        cy.checkTextVisibility("Dedicated Support and Performance Rewards")
    });

    it('10.Test to  check for the text "Who Can Become an Screenshotlayer Affiliate?" is present', () => {
        cy.checkTextVisibility("Who Can Become an Screenshotlayer Affiliate?")
    });

    it('11. Test to check for the text "Affiliate Program: Terms & Conditions"is present', () => {
        cy.checkTextVisibility('Affiliate Program: Terms & Conditions')
    });

    it('12. Test to check for the text "Get Answers to Your Questions (FAQ)" present', () => {
        cy.checkTextVisibility('Get Answers to Your Questions (FAQ)');
    });

    it('13. Test to check for the "Affiliate Links" is present', () => {
        cy.checkTextVisibility('Affiliate Links');
    });

    it('14. Test to click on the footer "Affiliate" link', () => {
        cy.get('.custom-container > :nth-child(2) > :nth-child(6) > a').click();
        cy.visit('https://affiliate.ipstack.com/');
    });

    it('15. Test to click on the "Apply now" button', () => {
        cy.get('.content > .btn').click();
        cy.checkTextVisibility('iPstack API Partner Program');
        cy.go('back');
    });
});