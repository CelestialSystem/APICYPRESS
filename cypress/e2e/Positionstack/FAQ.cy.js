describe('Test cases for FAQ Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.navigateUrlwithCookies('https://positionstack.com/');
    });

    it('1. Test to naviagate to the FAQs page', () => {
        cy.get('.header > .container > ul > :nth-child(3) > a').click();
    });

    it('2. Test to show the FAQs page', () => {
        cy.wait(2000);
        cy.componentVisiblityCheck('h2', 'Frequently Asked Questions');
    });

    it('3. Test to check Genral Question section', () => {
        cy.componentVisiblityCheck('.container > :nth-child(1) > h3', 'General');
    });

    it('4. Test to check the What is postionstack? Question ', () => {
        cy.componentVisiblityCheck(':nth-child(1) > ul > :nth-child(1) > .question', 'What is positionstack?');
        cy.get(':nth-child(1) > ul > :nth-child(1) > .question').click();
    });

    it('5. Test to check Geocoding & API Question section', () => {
        cy.componentVisiblityCheck(':nth-child(2) > h3', 'Geocoding & API');
    });

    it('6. Test to check the How scalable is the Postionstack API?', () => {
        cy.componentVisiblityCheck(':nth-child(2) > ul > :nth-child(1) > .question', 'How scalable is the positionstack API?');
        cy.get(':nth-child(1) > ul > :nth-child(2) > .question').click();
    });

    it('7. Test to check Plans, Pricing & Payment section', () => {
        cy.componentVisiblityCheck(':nth-child(3) > h3', 'Plans, Pricing & Payment');
    });

    it('8. Test to check the Which payment methods are supported?', () => {
        cy.componentVisiblityCheck(':nth-child(3) > ul > :nth-child(1) > .question', 'Which payment methods are supported?');
        cy.get(':nth-child(3) > ul > :nth-child(1) > .question').click();
    });

    it('9. Test to check API Access & Features section', () => {
        cy.componentVisiblityCheck(':nth-child(4) > h3', 'API Access & Features');
    });

    it('10. Test to check the What is postionstack? Question ', () => {
        cy.componentVisiblityCheck(':nth-child(4) > ul > :nth-child(1) > .question', 'What is an API Request?');
        cy.get(':nth-child(4) > ul > :nth-child(1) > .question').click();
    });
});