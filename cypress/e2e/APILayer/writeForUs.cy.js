import { APILAYER_BASE_URL } from '../../resources/data';

describe('Write For us', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit(APILAYER_BASE_URL);
    });

    it('1. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on wrtie two us link', () => {
        cy.scrollTo('bottom');
        cy.wait(3000);
        cy.get(':nth-child(3) > .nav > :nth-child(4) > .nav-link').click();
        cy.location('pathname').should('eq', '/docs/write-for-us');
        cy.get('.display-4').should('contains.text', 'Get paid with credits')
    })

    it('3. Test to checking for heading content', () => {
        cy.get('.mb-4 > h2').should('contains.text', 'What we need from you?')
    })

    it('4. Test to check email field should be visible', () => {
        cy.get('.js-validate > .col-lg-12 > :nth-child(1)').should('be.visible')
    })

    it('5. Test to check textarea field should be visible', () => {
        cy.get(':nth-child(2) > .form-control').should('be.visible')
    })

    it('6. Test to check the button should be visible', () => {
        cy.get('.mb-2 > .btn').should('be.visible')
    })

    it('7. Test to check the button should be visible', () => {
        cy.get('.w-md-80 > h2').should('contains.text', 'What Happens Next?')
    })

    it('8. Test to check Sumbit for review text should be visible', () => {
        cy.get(':nth-child(1) > .step-content-wrapper').should('contains.text', 'Submit for Review')
    })

    it('9. Test to check Get Approval text should be visible', () => {
        cy.get(':nth-child(2) > .step-content-wrapper').should('contains.text', 'Get Approval')
    })

    it('10.Test to Deliver Content text should be visible', () => {
        cy.get(':nth-child(3) > .step-content-wrapper').should('contains.text', 'Deliver Content')
    })

    it('11. Test to Make sure your submission: text should be visible', () => {
        cy.get('.pr-5').should('contains.text', 'Make sure your submission:')
    })

    it('12. Test to Here’s what happens after you send your submission: text should be visible', () => {
        cy.get('.pl-5').should('contains.text', 'Here’s what happens after you send your submission:')
    })

    it('13. Test to FAQ text should be visible', () => {
        cy.get('.mx-lg-auto > .mx-auto').should('contains.text', 'FAQ')
    })

    it('14. Test to Content Copyright text should be visible', () => {
        cy.get(':nth-child(1) > .pr-md-4').should('contains.text', 'Content Copyright')
    })

    it('15. Test to check How much can you earn? text should be visible', () => {
        cy.get('.mx-lg-auto > .row > :nth-child(2)').should('contains.text', 'How much can you earn?')
    })

    it('16. Test to check Is there a expiration time for earned credits? text should be visible', () => {
        cy.get(':nth-child(4) > .pr-md-4').should('contains.text', 'Is there a expiration time for earned credits?')
    })
});