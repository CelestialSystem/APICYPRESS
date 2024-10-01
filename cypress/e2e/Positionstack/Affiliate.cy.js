describe('Positionstack Affiliate page', () => {
    before(() => {
        cy.navigateUrlwithCookies('https://positionstack.com/');
    });

    it('1. Test to click on the "Affiliate" hyperlink', () => {
        cy.get('.header > .container > ul > :nth-child(4) > a').click();
        cy.navigateUrlwithCookies("https://affiliate.positionstack.com/")
    });

    it('2. Test to check for the text "Earn Passive Income with" is present', () => {
        cy.componentVisiblityCheck('h1', 'Earn Passive Income with');
    });

    it('3. Test to check for the "Earn Commissions by Promoting the Positionstack API. Join the Positionstack Affiliate Program Today!" text caption is present', () => {
        cy.componentVisiblityCheck('.content > p', 'Earn Commissions by Promoting the Positionstack API.\nJoin the Positionstack Affiliate Program Today!');
    });

    it('4. Test to check the "Apply Now" button and click on that', () => {
        cy.componentVisiblityCheck('.content > .btn');
    });

    it('5. Test to check the text "Why Join the Positionstack Affiliate Program?" is present', () => {
        cy.componentVisiblityCheck('.aboutSection > h2', 'Why Join the Positionstack Affiliate Program?')
    });

    it('6. Test to check the text "Boost Your Income and Partner with a Leader" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .contentBox > h6', 'Boost Your Income and Partner with a Leader')
    });

    it('7. Test to check the text "Seamless Integration and Effortless Tracking" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .contentBox > h6', 'Seamless Integration and Effortless Tracking')
    });

    it('8. Test to check the text "Dedicated Support and Performance Rewards" is present', () => {
        cy.componentVisiblityCheck('.flex > :nth-child(3) > .contentBox > h6', 'Dedicated Support and Performance Rewards')
    });

    it('9. Test to check the text "Simply Promotion with Comprehensive Resources" text is present', () => {
        cy.componentVisiblityCheck('.heading > h2', 'Simplify Promotion with Comprehensive Resources')
    });

    it('10. Test to check the text "Who Can Become an Positionstack Affiliate?" button is present', () => {
        cy.componentVisiblityCheck('.ipstack > .container > h2', 'Who Can Become an Positionstack Affiliate?')
    });

    it('11. Test to check the "Developers" secion is present.', () => {
        cy.componentVisiblityCheck('.flex > :nth-child(1) > h6', 'Developers')
    });

    it('12. Test to check the "Content Creators" secion is present.', () => {
        cy.componentVisiblityCheck('.container > .flex > :nth-child(2) > h6', 'Content Creators')
    });

    it('13. Test to check text "Product Owners & Mangers" section is present', () => {
        cy.componentVisiblityCheck(':nth-child(3) > h6', 'Product Owners & Project Managers');
    });

    it('14. Test to check text "Affiliates"', () => {
        cy.componentVisiblityCheck(':nth-child(4) > h6', 'Affiliates');
    });

    it('15. Test to check for the text "Your network, Our Ideal Customer" is present', () => {
        cy.componentVisiblityCheck('.content > h2', 'Your Network, Our Ideal Customer');
    });

    it('16. Test to verify by clicking on "Apply Now" button', () => {
        cy.get('.testimonials > .text-center > .btn').click();
    });

    it('17. Test to verify the "Positionstack Partner Program" section is present', () => {
        cy.componentVisiblityCheck('.heading', 'Positionstack Partner Program');
    });

    it('18. Test to go back to the "Affiliate" page', () => {
        cy.navigateUrlwithCookies('https://affiliate.positionstack.com/');
    });

    it('19. Test to verify the "Affiliate Program: Terms & Conditions" section is present', () => {
        cy.componentVisiblityCheck('.termsConditions > h2', 'Affiliate Program: Terms & Conditions');
    });

    it('20. Test to verify the "Get Answers to Your Questions(FAQ)" section is present', () => {
        cy.componentVisiblityCheck('.Accordions > .container > :nth-child(1)', 'Get Answers to Your Questions (FAQ)');
    });

    it('21. Test to verify the "How do i Join the APILayer Affiliate Program?" section is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .accordion > h5', 'How do I join the APILayer Affiliate Program?');
    });

    it('22. Test to verify clicking on the "How do I Join the APIlayer Affiliate program?" is present', () => {
        cy.get(':nth-child(2) > .accordion > h5').click();
        cy.componentVisiblityCheck(':nth-child(2) > .accordion-content > :nth-child(1)', 'You can join the APILayer Affiliate Program by visiting the affiliate pages:')
        cy.get(':nth-child(2) > .accordion > .arrow').click();
    });

    it('23. Test to check "Affiliate Links" is present', () => {
        cy.componentVisiblityCheck('.Our_links > h2.text-center', 'Affiliate Links');
    });

    it('24. Test to check "Sign Up Now and Become an Postionstack Affiliate" button is present', () => {
        cy.componentVisiblityCheck('.container > .btn', 'Sign Up Now and Become an Positionstack Affiliate!');
    });

    it('25. Test to check by clicking the "Sign Up Now and Become an Postionstack Affiliate" button and redirect back to "Affiliate" page', () => {
        cy.get('.container > .btn').click();
        cy.navigateUrlwithCookies('https://affiliate.positionstack.com/');
    });
});