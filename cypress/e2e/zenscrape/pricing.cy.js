import { ZENSCRAPE_BASE_URL } from '../../resources/data';

describe('Zensrape Pricing page', () => {
    before(() => {
        cy.navigateUrlwithCookies(ZENSCRAPE_BASE_URL);
    });

    it('1.Test to click on the "Pricing" hyperlink and navigate to the "Pricing" page', () => {
        cy.get('[href="/#pricingSection"]').click();
    });

    it('2.Test to check the presence of "Simple and Economical Pricing" title text', () => {
        cy.componentVisiblityCheck('.py-12', 'Simple and Economical Pricing')
    });

    it('3.Test to check the caption "From hobby projects to large-scale scraping projects, we offer a range of pricing options tailored to fit your specific needs" is present', () => {
        cy.componentVisiblityCheck('.py-12 > .text-xl', 'From hobby projects to large-scale scraping projects, we offer a range of pricing options tailored to fit your specific needs.');
    });

    it('4.Test to chek the "Free" plan text and price', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .p-6 > .text-lg', 'Free');
        cy.componentVisiblityCheck(':nth-child(3) > .text-3xl', '$0');
    });

    it('5.Test to chek the "Small" plan text and price', () => {
        cy.componentVisiblityCheck(':nth-child(2) > .p-6 > .text-lg', 'Small');
        cy.componentVisiblityCheck(':nth-child(2) > .p-6 > :nth-child(3)', '$59.99');
    });

    it('6.Test to chek the "Medium" plan text and price', () => {
        cy.componentVisiblityCheck(':nth-child(3) > .p-6 > .text-lg', 'Medium');
        cy.componentVisiblityCheck(':nth-child(3) > .p-6 > :nth-child(3)', '$99.99');
    });

    it('7.Test to chek the "Large" plan text and price', () => {
        cy.componentVisiblityCheck(':nth-child(4) > .p-6 > .text-lg', 'Large');
        cy.componentVisiblityCheck(':nth-child(4) > .p-6 > :nth-child(3)', '$249.99');
    });

    it('8.Test to chek the "Professional" plan text and price', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .p-6 > .text-lg', 'Professional');
        cy.componentVisiblityCheck(':nth-child(5) > .p-6 > :nth-child(3)', '$349.99');
    });

    it('9.Test to check the "Free" plan features', () => {
        cy.get(':nth-child(1) > .pt-6 > .mt-6 > .flex > .text-sm')
    });

    it('10.Test to check the "Features" button in the "Small" plan', () => {
        cy.get(':nth-child(2) > .pt-6 > .mt-6').should('contain.text', '250,000 Credits')
            .and('contain.text', '10 Concurrent Requests')
            .and('contain.text', 'Worldwide Geotargeting')
            .and('contain.text', 'Standard Proxies')
            .and('contain.text', 'Premium Proxies')
            .and('contain.text', 'Self-Service Onboarding');
    });

    it('11. Test to check the "Features" button the "Medium" plan', () => {
        cy.get(':nth-child(3) > .pt-6 > .mt-6').should('contain.text', '1,000,000 Credits')
            .and('contain.text', '25 Concurrent Requests')
            .and('contain.text', 'Worldwide Geotargeting')
            .and('contain.text', 'Standard Proxies')
            .and('contain.text', 'Premium Proxies')
            .and('contain.text', 'Concierge Onboarding')
            .and('contain.text', 'Service Level Agreement');
    });
    
    it('12. Test to check the "Features" button in the "Large" plan', () => {
        cy.get(':nth-child(4) > .pt-6 > .mt-6').should('contain.text', '3,000,000 Credits')
            .and('contain.text', '50 Concurrent Requests')
            .and('contain.text', 'Worldwide Geotargeting')
            .and('contain.text', 'Standard Proxies')
            .and('contain.text', 'Premium Proxies')
            .and('contain.text', 'Concierge Onboarding')
            .and('contain.text', 'Service Level Agreement');
    });

    it('13. Test to check the "Features" button in the "Professional" plan', () => {
        cy.get(':nth-child(5) > .pt-6 > .mt-6').should('contain.text', '5,000,000 Credits')
            .and('contain.text', '100 Concurrent Requests')
            .and('contain.text', 'Worldwide Geotargeting')
            .and('contain.text', 'Standard Proxies')
            .and('contain.text', 'Premium Proxies')
            .and('contain.text', 'Concierge Onboarding')
            .and('contain.text', 'Service Level Agreement')
            .and('contain.text', 'Prioritized Queue');
    });

    it('14. Test to check "Get free" plan button', () => {
        cy.get(':nth-child(1) > .p-6 > .price-link').should('be.visible', 'contain.text', 'Get Free').click();
        cy.navigateUrlwithCookies('https://app.zenscrape.com/register?plan=free');
        cy.go('back');
    });

    it('15. Test to check "Buy Small" plan  button', () => {
        cy.get(':nth-child(2) > .p-6 > .price-link').should('be.visible', 'contain.text', 'Buy Small').click();
        cy.navigateUrlwithCookies('https://app.zenscrape.com/register?plan=medium');
        cy.go('back');
    });

    it('16. Test to check "Buy Medium" plan button', () => {
        cy.get(':nth-child(3) > .p-6 > .price-link').should('be.visible', 'contain.text', 'Buy Medium').click();
        cy.navigateUrlwithCookies('https://app.zenscrape.com/register?plan=large');
        cy.go('back');
    });

    it('17. Test to check "Buy Large" plan button', () => {
        cy.get(':nth-child(4) > .p-6 > .price-link').should('be.visible', 'contain.text', 'Buy Large').click();
        cy.navigateUrlwithCookies('https://app.zenscrape.com/register?plan=very-large');
        cy.go('back');
    });

    it('18. Test to check "Buy Very Large" button', () => {
        cy.get(':nth-child(5) > .p-6 > .price-link').should('be.visible', 'contain.text', 'Buy Very Large').click();
        cy.navigateUrlwithCookies("https://app.zenscrape.com/register?plan=professional");
        cy.go('back');
    });
});