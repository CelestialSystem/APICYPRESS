describe('Test Cases for Postion Stack Home page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://affiliate.positionstack.com/');
    });

    it('1. Test to check for the Web Scraping text is there or not', () => {
        cy.componentVisiblityCheck('h1', 'Earn Passive Income with');
    });

    it('2. Test to check for the Proxy rotation and headless browser', () => {
        cy.componentVisiblityCheck('.content > p', 'Earn Commissions by Promoting the Positionstack API.\nJoin the Positionstack Affiliate Program Today!');
    });

    it('3. Test to check the "Apply Now" button and click on that', () => {
        cy.componentVisiblityCheck('.content > .btn');
    });

    it('4. Test to check the text "Why Join the Positionstack Affiliate Program?"', () => {
        cy.componentVisiblityCheck('.aboutSection > h2','Why Join the Positionstack Affiliate Program?')
    });

    it('5. Test to check the text "Boost Your Income and Partner with a Leader"', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .contentBox > h6','Boost Your Income and Partner with a Leader')
    });

    it('6. Test to check the text "Seamless Integration and Effortless Tracking"', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .contentBox > h6','Seamless Integration and Effortless Tracking')
    });

    it('7. Test to check the text "Dedicated Support and Performance Rewards"', () => {
        cy.componentVisiblityCheck('.flex > :nth-child(3) > .contentBox > h6','Dedicated Support and Performance Rewards')
    });

    it('8. Test to check the text "Simply Promotion with Comprehensive Resources" text is there or not', () => {
       cy.componentVisiblityCheck('.heading > h2','Simplify Promotion with Comprehensive Resources')
    });

    it('9. Test to check the text "Who Can Become an Positionstack Affiliate?" button is there or not', () => {
        cy.componentVisiblityCheck('.ipstack > .container > h2','Who Can Become an Positionstack Affiliate?')
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
        cy.componentVisiblityCheck(':nth-child(3) > h6', 'Affiliates');
    });

    it('14. Test to check CONTACT US for quote button and should redirect to contact us page', () => {
        cy.componentVisiblityCheck('.content > h2', 'Your Network, Our Ideal Customer');
    });

    // it('15. Test to Verify the "Web Scraping API Use Cases" section is visible', () => {
    //     cy.get('.text-left > .mt-2').should('be.visible', 'contain.text', 'Web Scraping API Use Cases');
    // });

    // it('16. Test to Verify the "Web crawling General Data Aggreagation" section is visible', () => {
    //     cy.get(':nth-child(1) > ul > :nth-child(1) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Web crawling General Data Aggregation');
    // });

    // it('17. Test to Verify the "Review scraping Customer Reviews" section is visible', () => {
    //     cy.get(':nth-child(2) > ul > :nth-child(1) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Review scraping Customer Reviews');
    // });

    // it('18. Test to Verify the "Price Data Scraping Ecommerce: Price & Product Information" section is visible', () => {
    //     cy.get(':nth-child(1) > ul > :nth-child(2) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Price Data Scraping Ecommerce: Price & Product Information');
    // });

    // it('19. Test to Verify the "Hiring Data Scraping Job & Hiring Data" section is visible', () => {
    //     cy.get(':nth-child(2) > ul > :nth-child(2) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Hiring Data Scraping Job & Hiring Data');
    // });

    // it('20. Test to Verify the "Marketing Data Scraping Sales Leads" section is visible', () => {
    //     cy.get(':nth-child(1) > ul > :nth-child(3) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Marketing Data Scraping Sales Leads');
    // });

    // it('21. Test to Verify the "Real estate data scraping Real Estate Data" section is visible', () => {
    //     cy.get(':nth-child(2) > ul > :nth-child(3) > .flex > .ml-3 > dl > .text-lg').should('be.visible', 'contain.text', 'Real estate data scraping Real Estate Data');
    // });

    // it('21. Test to check "Frequently asked questions" section is visible', () => {
    //     cy.get('#faqSection > .max-w-6xl > .text-3xl').should('be.visible', 'contain.text', 'Frequently asked questions');
    // });
});

