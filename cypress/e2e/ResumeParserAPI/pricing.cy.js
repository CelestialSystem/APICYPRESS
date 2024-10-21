import { RESUME_PARSER_API } from '../../resources/data';

describe('Resume Parser API Pricing page', () => {
    before(() => {
        cy.visit(RESUME_PARSER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Resume Parser API" title and other contents are present', () => {
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Resume Parser API');
    });

    it('3. Test to check "Free Plan" features', () => {
        cy.freePlanCheck('100');
    });

    it('4. Test to check "Starter Plan" features', () => {
        cy.starterPlanCheck('29.99', '1,500');
    });
   
    it('5. Test to check "Pro Plan" features', () => {
        cy.proPlanCheck('49.99', '4,500');
    });

    it('6. Test to check "Custom Plan" details are present', () => {
        // Check if the "Custom Plan" title is visible
        cy.componentVisiblityCheck('.card-header .h3', 'Custom Plan');

        // Check if "Volume" text is visible
        cy.componentVisiblityCheck('.font-size-4.text-primary', 'Volume');

        // Check if the feature for "Custom Plan" is visible
        cy.componentVisiblityCheck('.card-body .media-body', 'Any requests volume you need');

        // Check if the "Contact Us" button is present and clickable
        cy.get('.btn.btn-outline-primary')
            .should('be.visible')
            .and('contain.text', 'Contact\nUs');
    });

    it('7. Test to check "Contact Us" button text for Custom Plan is present and verify that the form opens on click', () => {
        // Check if the "Contact Us" link is visible and contains the correct text
        cy.componentVisiblityCheck('.btn.btn-outline-primary', 'Contact\nUs');

        // Ensure the button is visible before clicking
        cy.get('.card-header:has(.h3:contains("Custom Plan"))')
            .find('a.btn.btn-outline-primary')
            .should('be.visible')
            .and('contain.text', 'Contact\nUs')
            .click({force:true});

        // Verify that the document is fully loaded
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });

        // Check if the correct header is visible in the new page/form
        cy.componentVisiblityCheck('h1', 'Contact Sales & Customer Support');

        // Navigate back to the main page
        cy.navigateUrlwithCookies(RESUME_PARSER_API);
    });
});
