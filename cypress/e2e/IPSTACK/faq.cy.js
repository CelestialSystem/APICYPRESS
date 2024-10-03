import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Ipstack FAQs page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to naviagate to the "FAQs" page', () => {
        cy.AcceptCookies();
        cy.get('.main-menu > :nth-child(4)').trigger('mouseover');
        cy.get(':nth-child(4) > .submenu > :nth-child(1) > a').click({force: true});
        cy.visit(`${IPSTACK_BASE_URL}/faq`);
        cy.AcceptCookies();
    });

    it('2. Test to check the text "Frequently Asked Questions" is present', () => {
        cy.checkTextVisibility('Frequently Asked Questions');
    });

    it('3. Test to check the text "View the most common questions people ask about ipstack." is present', () => {
        cy.checkTextVisibility('View the most common questions people ask about ipstack.')
    });

    it('4. Test to have the "Any questions? Our team is here to help!" text is present', () => {
        cy.checkTextVisibility('Any questions? Our team is here to help!');
    });

    it('5. Test to have "Contact Support" button ', () => {
        cy.componentVisiblityCheck('.contact > .container > .docs-contact-btn > .button');
    });

    it('6. Test to have "DATA & FEATURES" text is present', () => {
        cy.checkTextVisibility('DATA & FEATURES');
    });

    it('7. Test to click on the question "What is JavaScript"', () => {
        cy.get(':nth-child(7) > .container > .accordion > :nth-child(2)').scrollIntoView();
        cy.get(':nth-child(7) > .container > .accordion > :nth-child(2) > .label').click();
        cy.componentVisiblityCheck('.active > .content');
        cy.get('.active > .content').click();
    });

    it('8. Test to check for the "API ACCESS" is present', () => {
        cy.checkTextVisibility('API ACCESS');
    });

    it('9. Test to click on the question "What happens if my allowed volume is exceeded?"', () => {
        cy.get(':nth-child(7) > .container > .accordion > :nth-child(2) > .label').click();
        cy.componentVisiblityCheck('.active > .content');
        cy.get('.active > .content').click();
    });

    it('10. Test to check "PLANS & PRICING" is present ', () => {
        cy.checkTextVisibility('PLANS & PRICING');
    });

    it('11. Test to click on the question "How can I pay?"', () => {
        cy.get(':nth-child(8) > .container > .accordion > :nth-child(3) > .label').click();
        cy.componentVisiblityCheck('.active > .content');
        cy.get('.active > .content').click();
    })

    it('12. Test to check text "Ipstack is one of the most popular IP to geolocation API services worldwide" is present', () => {
        cy.checkTextVisibility('Ipstack is one of the most popular IP to geolocation API services worldwide');
    });

    it('13. Test to click on the footer link "FAQs"', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(2) > a').click();
    });
});
