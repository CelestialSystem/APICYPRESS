import { APILAYER_BASE_URL } from '../../resources/data';

describe('Contact us page', () => {
    before(() => {
        cy.visit(APILAYER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check if route is "Contact Us"', () => {
        cy.scrollTo('bottom');
        cy.get(':nth-child(5) > .nav > :nth-child(2) > .nav-link').click()
        cy.location('pathname').should('eq', '/contact-us');
    })

    it('3. Test to check if "Contact Us" page is having title or not', () => {
        cy.get('.bg-img-hero > .container > .w-md-80 > h1').should('contains.text', 'Contact us')
    })

    it('4. Test to check if click on "Support" should redirect to support page', () => {
        cy.get(':nth-child(1) > .card > .card-body').click();
        cy.location('pathname').should('eq', '/support');
        cy.get('h1').should('contains.text', 'Contact Sales & Customer Support');
        cy.visit(`${APILAYER_BASE_URL}/contact-us`);
    })

    it('5. Test to check if click on "Docs" should redirect to "Docs" page', () => {
        cy.get('.row > :nth-child(2) > .card > .card-body').click();
        cy.location('pathname').should('eq', '/docs');
        cy.get('h1').should('contains.text', 'How can we help?');
        cy.visit(`${APILAYER_BASE_URL}/contact-us`);
    })

    it('6. Test to check if click on "Getting Started" should redirect to "Getting Started" page', () => {
        cy.get(':nth-child(3) > .card > .card-body').click();
        cy.location('pathname').should('eq', '/docs/article/getting-started');
        cy.get('h1').should('contains.text', 'Getting Started');
        cy.visit(`${APILAYER_BASE_URL}/contact-us`);
    })

    it('7. Test to check if click on "Support" button should redirect to "Support" page', () => {
        cy.get(':nth-child(1) > .card > .card-footer').click();
        cy.location('pathname').should('eq', '/support');
        cy.get('h1').should('contains.text', 'Contact Sales & Customer Support');
        cy.visit(`${APILAYER_BASE_URL}/contact-us`);
    })

    it('8. Test to check if click on visit "Docs" button should redirect to "Support" page', () => {
        cy.get(':nth-child(2) > .card > .card-footer').click();
        cy.location('pathname').should('eq', '/docs');
        cy.get('h1').should('contains.text', 'How can we help?');
        cy.visit(`${APILAYER_BASE_URL}/contact-us`);
    })

    it('9. Test to check if click on "Start Now" button should redirect to "Getting Started" page', () => {
        cy.get(':nth-child(3) > .card > .card-footer').click();
        cy.location('pathname').should('eq', '/docs/article/getting-started');
        cy.get('h1').should('contains.text', 'Getting Started');
        cy.visit(`${APILAYER_BASE_URL}/contact-us`);
    })

    it('10. Test to on click of "Create Ticket" form should open', () => {
        cy.get('.w-md-80 > .btn').click();
        cy.location('pathname').should('eq', '/support');
        cy.get('h1').should('contains.text', 'Contact Sales & Customer Support');
    })
});