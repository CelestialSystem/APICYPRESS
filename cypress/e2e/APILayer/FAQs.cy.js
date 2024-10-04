import { APILAYER_BASE_URL } from '../../resources/data';

describe('FAQs', () => {
    before(() => {
        cy.visit(APILAYER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Click on "FAQs" button from footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(3) > .nav-link').scrollIntoView({ behaviour: 'smooth' });
        cy.get(':nth-child(3) > .nav > :nth-child(3) > .nav-link').click();
        cy.visit(`${APILAYER_BASE_URL}/docs/article/marketplace-faq`);
        cy.AcceptCookies();
    });

    it('3. test to check if route is "marketplace-faq"', () => {
        cy.location('pathname').should('eq', '/docs/article/marketplace-faq');
    });

    it('4. test to check if  "FAQs" view is there', () => {
        cy.get('.h2').should('contains.text', 'Marketplace FAQ')
    });

    it('5. test to check if  FAQs view is having "Marketplace container"', () => {
        cy.get('#marketplace').should('be.visible')
    });

    it('6. test to check if  FAQs view is having "Security container"', () => {
        cy.get('#security').scrollIntoView()
        cy.get('#security').should('be.visible')
    });

    it('7. test to check if  FAQs view is having "Account & Setting container"', () => {
        cy.get('#account').scrollIntoView()
        cy.get('#account').should('be.visible')
    });

    it('8. test to check if  Marketplace view is having "Toggle" button', () => {
        cy.get('#marketplace').scrollIntoView()
        cy.get('#basicsHeadingOne > .btn > .card-btn-toggle > .card-btn-toggle-default').click()
    });

    it('9. test to check on click of toggle button content should be expanded', () => {
        cy.get('#marketplace').scrollIntoView()
        cy.get('#basicsCollapseOne > .card-body').should('be.visible')
    });

    it('10. test to check on click of toggle button content should be expanded', () => {
        cy.get('#account').scrollIntoView()
        cy.get('#accountHeadingOne > .btn > .card-btn-toggle > .card-btn-toggle-default').click()
    });


    it('11.Test to Click on "Documentation" in navbar', () => {
        cy.get('#logoAndNav').scrollIntoView()
        cy.get('.navbar-nav > :nth-child(2) > .nav-link').click();
        cy.location('pathname').should('eq', '/docs');
    });

    it('12. test to check if "Search Bar" is there', () => {
        cy.get('#top-search-bar').should('be.visible')
    });

    it('13. test to check if "Search Bar" functionality is working', () => {
        const text = 'typing to test the search bar'
        cy.get('#top-search-bar').type(`${text}{enter}`);
        cy.get('.col-lg-7 > :nth-child(1)').should('contains.text', 'Search Results')
    });
});