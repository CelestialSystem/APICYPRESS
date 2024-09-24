describe('Test cases for FAQ Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.navigateUrlwithCookies('https://weatherstack.com/');
    });

    it('1. Test to naviagate to the FAQs page', () => {
        cy.get('.header > .container > ul > :nth-child(3) > a').click();
    });

    it('2. Test to show the FAQs page', () => {
        cy.wait(2000);
        cy.checkTextVisibility('Frequently Asked Questions');
    });

    it('3. Test to check Genral Question section', () => {
        cy.checkTextVisibility('General');
    });

    it('4. Test to check the What is weatherstack? Question ', () => {
        cy.componentVisiblityCheck(':nth-child(1) > ul > :nth-child(1) > .question', 'What is weatherstack?');
        cy.get(':nth-child(1) > ul > :nth-child(1) > .question').click();
    });

    it('5. Test to check Weather Data & API section', () => {
        cy.checkTextVisibility('Weather Data & API');
    });

    it('6. Test to check  Where is the data coming from?', () => {
        cy.componentVisiblityCheck(':nth-child(2) > ul > :nth-child(1) > .question', 'Where is the data coming from?');
        cy.get(':nth-child(1) > ul > :nth-child(2) > .question').click();
    });

    it('7. Test to check Plans, Pricing & Payment section', () => {
        cy.checkTextVisibility('Plans, Pricing & Payment');
    });

    it('8. Test to check the What is the difference between free and paid subscriptions?', () => {
        cy.componentVisiblityCheck(':nth-child(3) > ul > :nth-child(1) > .question', 'What is the difference between free and paid subscriptions?');
        cy.get(':nth-child(3) > ul > :nth-child(1) > .question').click();
    });

    it('9. Test to check Get Free Api key button', () => {
        cy.get('.container > p > a').should('be.visible', 'contain.text', 'GET API ACCESS KEY').click();
        cy.go('back');
    });
});