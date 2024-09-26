describe('Contact Form Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com/');
    });
    
    it('1. Test to naviagate to the Affiliates page', () => {
        cy.AcceptCookies();
        cy.get('.main-menu > :nth-child(4)').trigger('mouseover');
        cy.get(':nth-child(4) > .submenu > :nth-child(3) > a').click({force: true});
    });

    it('2. Test to check for the heading', () => {
        cy.get('h1').should('contain.text', 'Earn Passive Income');
        cy.AcceptCookies();
    });

    it('3. Test to check for the Earn commisions text', () => {
        cy.get('.content > p').should('contain.text', 'Earn Commissions by Promoting the Ipstack API.');
    });

    it('4. Test to check for the Apply now button', () => {
        cy.get('.content > .btn').should('contain.text', 'Apply Now');
    });

    it('5. Test to  check for the why to join the affiliate program ', () => {
        cy.get('.aboutSection > h2').should('contain.text', 'Why Join the Ipstack Affiliate Program?');
    });

    it('6. Test to check for the comprehsnive resources', () => {
        cy.get('.heading > h2').should('contain.text', "Simplify Promotion with Comprehensive Resources")
    });

    it('7. Test to check for the options of the joining ipstack', () => {
        cy.get(':nth-child(1) > .contentBox > h6').should('contain.text', "Boost Your Income and Partner with a Leader")
    });

    it('8. Test to  check for the options of the joining ipstack', () => {
        cy.get(':nth-child(2) > .contentBox > h6').should('contain.text', "Seamless Integration and Effortless Tracking")
    });

    it('9. Test to check for the options of the joining ipstack', () => {
        cy.get(':nth-child(3) > .contentBox > h6').should('contain.text', "Dedicated Support and Performance Rewards")
    });

    it('10.Test to  check for the text who can became the ipstack affilate', () => {
        cy.get('.ipstack > .container > h2').should('contain.text', "Who Can Become an Ipstack Affiliate?")
    });

    it('11. Test to  check for the Apply now button', () => {
        cy.get('.content > .btn').should('contain.text', 'Apply Now').click();
        cy.go('back');
    });

    it('12. Test to  check for the Terms and conditions text', () => {
        cy.get('.termsConditions > h2').should('contain.text', 'Affiliate Program: Terms & Conditions')
    });

    it('13. Test to check for the text', () => {
        cy.get('.Accordions > .container > :nth-child(1)').should('contain.text', 'Get Answers to Your Questions (FAQ)');
    });

    it('14. Test to check for the Affiliate links', () => {
        cy.get('.Our_links > h2.text-center').should('contain.text', 'Affiliate Links');
    });

    it('15. Test to click on the footer Affiliate link', () => {
        cy.get('.custom-container > :nth-child(2) > :nth-child(6) > a').click();
        cy.visit('https://affiliate.ipstack.com/');
    })

});