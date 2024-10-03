import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Contact Form Page', () => {
    before(() => {
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to navigate to the "Pricing" page', () => {
        cy.AcceptCookies();
        cy.get('.main-menu > :nth-child(1) > a').click();
        cy.assertPathname('/product');
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('2. Test to naviagate to the "Blog" page', () => {
        cy.get('.main-menu > :nth-child(4)').trigger('mouseover');
        cy.get(':nth-child(4) > .submenu > :nth-child(2) > a').click({force: true});
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('3. Test to naviagate to the "Affiliates" page', () => {
        cy.get('.main-menu > :nth-child(4)').trigger('mouseover');
        cy.get(':nth-child(4) > .submenu > :nth-child(3) > a').click({force: true});
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('4. Test to naviagate to the "FAQ" page', () => {
        cy.get('.main-menu > :nth-child(4)').trigger('mouseover');
        cy.get(':nth-child(4) > .submenu > :nth-child(1) > a').click({force: true});
        cy.visit(`${IPSTACK_BASE_URL}/faq`);
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('5. Test to naviagate to the "Documentation" page', () => {
        cy.get('.main-menu > :nth-child(2)').trigger('mouseover');
        cy.get(':nth-child(2) > .submenu > :nth-child(1) > a').click({force: true});
        cy.navigateUrlwithCookies(`${IPSTACK_BASE_URL}/documentation`);
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('6. Test to naviagate to the "Status" page', () => {
        cy.get('.main-menu > :nth-child(2)').trigger('mouseover');
        cy.get(':nth-child(2) > .submenu > :nth-child(2) > a').click({force: true});
        cy.navigateUrlwithCookies('https://status.ipstack.com/');
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('7. Test to naviagate to the "Run in Postman" page', () => {
        cy.get('.main-menu > :nth-child(2)').trigger('mouseover');
        cy.get(':nth-child(3) > .postman-run-button').click({force: true});
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('8. Test to naviagate to the "Chat GPT" page', () => {
        cy.get('.main-menu > :nth-child(2)').trigger('mouseover');
        cy.get('.submenu > :nth-child(5) > a').click({force: true});
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('9. Test to naviagate to the "Marketplace" page', () => {
        cy.get('.main-menu > :nth-child(3) > a').click();

        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('10. Test to naviagate to the "List API" page', () => {
        cy.get('.main-menu > :nth-child(5)').trigger('mouseover');
        cy.get(':nth-child(5) > .submenu > :nth-child(1)').click({force: true});
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('10. Test to naviagate to the "Contact Support" page', () => {
        cy.get('.main-menu > :nth-child(5)').trigger('mouseover');
        cy.get(':nth-child(5) > .submenu > :nth-child(2) > a').click({force: true});
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('10. Test to naviagate to the "Contact Sales" page', () => {
        cy.get('.main-menu > :nth-child(5)').trigger('mouseover');
        cy.get(':nth-child(5) > .submenu > :nth-child(3) > a').click({force: true});
        cy.AcceptCookies();
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });
});