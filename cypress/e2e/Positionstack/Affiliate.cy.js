describe('Test Cases for Position Stack Affiliate Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://positionstack.com/');
    });

    it('0. Test to click on the Affiliate link from the header', () => {
        cy.get('.header > .container > ul > :nth-child(4) > a').click();
    });

    it('1. Test to check for the Earn Passive Income with text is there or not', () => {
        cy.componentVisiblityCheck('h1', 'Earn Passive Income with');
    });

    it('2. Test to check for the Earn commisions text caption is there or not', () => {
        cy.componentVisiblityCheck('.content > p', 'Earn Commissions by Promoting the Positionstack API.\nJoin the Positionstack Affiliate Program Today!');
    });

    it('3. Test to check the "Apply Now" button and click on that', () => {
        cy.componentVisiblityCheck('.content > .btn');
    });

    it('4. Test to check the text "Why Join the Positionstack Affiliate Program?"', () => {
        cy.componentVisiblityCheck('.aboutSection > h2', 'Why Join the Positionstack Affiliate Program?')
    });

    it('5. Test to check the text "Boost Your Income and Partner with a Leader"', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .contentBox > h6', 'Boost Your Income and Partner with a Leader')
    });

    it('6. Test to check the text "Seamless Integration and Effortless Tracking"', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .contentBox > h6', 'Seamless Integration and Effortless Tracking')
    });

    it('7. Test to check the text "Dedicated Support and Performance Rewards"', () => {
        cy.componentVisiblityCheck('.flex > :nth-child(3) > .contentBox > h6', 'Dedicated Support and Performance Rewards')
    });

    it('8. Test to check the text "Simply Promotion with Comprehensive Resources" text is there or not', () => {
        cy.componentVisiblityCheck('.heading > h2', 'Simplify Promotion with Comprehensive Resources')
    });

    it('9. Test to check the text "Who Can Become an Positionstack Affiliate?" button is there or not', () => {
        cy.componentVisiblityCheck('.ipstack > .container > h2', 'Who Can Become an Positionstack Affiliate?')
    });

    it('10. Test to check the Developers secion is there or not.', () => {
        cy.componentVisiblityCheck('.flex > :nth-child(1) > h6', 'Developers')
    });

    it('11. Test to check the Content Creators secion is there or not.', () => {
        cy.componentVisiblityCheck('.container > .flex > :nth-child(2) > h6', 'Content Creators')
    });

    it('12. Test to check text Product Owners and Mangers', () => {
        cy.componentVisiblityCheck(':nth-child(3) > h6', 'Product Owners & Project Managers');
    });

    it('13. Test to check text Affiliates', () => {
        cy.componentVisiblityCheck(':nth-child(4) > h6', 'Affiliates');
    });

    it('14. Test to check for the text Your network, Our Ideal Customer', () => {
        cy.componentVisiblityCheck('.content > h2', 'Your Network, Our Ideal Customer');
    });

    it('15. Test to Verify by clicking on "Apply Now" button', () => {
        cy.get('.testimonials > .text-center > .btn').click();
    });

    it('16. Test to Verify the "Positionstack Partner Program" section is visible', () => {
        cy.componentVisiblityCheck('.heading', 'Positionstack Partner Program');
    });

    it('17. Test to go back to the Affiliate page', () => {
        cy.navigateUrlwithCookies('https://affiliate.positionstack.com/');
    });

    it('18. Test to Verify the "Affiliate Program: Terms & Conditions" section is visible', () => {
        cy.componentVisiblityCheck('.termsConditions > h2', 'Affiliate Program: Terms & Conditions');
    });

    it('19. Test to Verify the "Get Answers to Your Questions(FAQ)" section is visible', () => {
        cy.componentVisiblityCheck('.Accordions > .container > :nth-child(1)', 'Get Answers to Your Questions (FAQ)');
    });

    it('20. Test to Verify the "How do i Join the APILayer Affiliate Program?" section is visible', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .accordion > h5', 'How do I join the APILayer Affiliate Program?');
    });

    it('21. Test to Verify clicking on the How do I Join the APIlayer Affiliate program?', () => {
        cy.get(':nth-child(2) > .accordion > h5').click();
        cy.componentVisiblityCheck(':nth-child(2) > .accordion-content > :nth-child(1)', 'You can join the APILayer Affiliate Program by visiting the affiliate pages:')
        cy.get(':nth-child(2) > .accordion > .arrow').click();
    });

    it('22. Test to check Affiliate Links visible or not', () => {
        cy.componentVisiblityCheck('.Our_links > h2.text-center', 'Affiliate Links');
    });

    it('23. Test to check Sign Up Now and Become an Postionstack Affiliate button visible or not', () => {
        cy.componentVisiblityCheck('.container > .btn', 'Sign Up Now and Become an Positionstack Affiliate!');
    });

    it('24. Test to check by clicking the Sign Up Now and Become an Postionstack Affiliate button and redirect back to Affiliate page', () => {
        cy.get('.container > .btn').click();
        cy.navigateUrlwithCookies('https://affiliate.positionstack.com/');
    });

});