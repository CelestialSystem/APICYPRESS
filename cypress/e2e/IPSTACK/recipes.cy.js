import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Ipstack Recipe page', () => {
    before(() => {
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to naviagate to the "Recipes" page', () => {
        cy.AcceptCookies();
        cy.get('.custom-container > :nth-child(3) > :nth-child(6) > a').click();
        cy.navigateUrlwithCookies('https://ipstack.com/recipe');
    });

    it('2. Test to show the text "Ipstack Fraud Detection Recipe" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .feature-blog-text > :nth-child(1) > .post_title', 'Ipstack Fraud Detection Recipe');
    });

    it('3. Test to check the text "Leveraging IP Stack for Enhanced Technical Support: An Overview" is present', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .feature-blog-text > :nth-child(1) > .post_title', 'Leveraging IP Stack for Enhanced Technical Support: An Overview')
    });

    it('4. Test to check for the sidebar "Recipes" text', () => {
        cy.componentVisiblityCheck('.blog-sidebar-content-post', 'Recipes')
    });

    it('5. Test to check for the "Home" button recipes', () => {
        cy.componentVisiblityCheck('p > [href="/"]', 'Home');
    });

    it('6. Test to check for the "Receipes" button', () => {
        cy.get('.posts_text').click();
    });

    it('7. Test to click on the footer link "Recipes"', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(6) > a').click();
    });
});
