import { RESUME_PARSER_API } from '../../resources/data';

describe('Resume Parser API Pricing page', () => {
    before(() => {
        cy.visit(RESUME_PARSER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Resume Parser API" title and other contents are present', () => {
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'Resume Parser API');
    });

    // Test to check visibility of the "Free Plan" title and its price
    it('3. Test to check "Free Plan" title and price are present', () => {
        // Verify "Free Plan" title visibility and content
        cy.get('.card-header .d-block.h3')
            .should('be.visible')
            .and('contain.text', 'Free Plan');

        // Verify "Free Plan" price visibility and content
        cy.get('.plan-price.font-size-4.font-weight-bold.text-primary')
            .should('be.visible')
            .and('contain.text', '$0.00');

        // Check if the card body is present and visible
        cy.get('.card-body.py-0.px-3')
            .should('exist')
            .and('be.visible');

        // Check for "100 Requests / Monthly" text
        cy.get('.card-body .media-body')
            .contains('100 Requests / Monthly')
            .should('exist')
            .and('be.visible');

        // Check for "Free for Lifetime" text
        cy.get('.card-body .media-body')
            .contains('Free for Lifetime')
            .should('exist')
            .and('be.visible');

        // Check for "No Credit Card Required" text
        cy.get('.card-body .media-body')
            .contains('No Credit Card Required')
            .should('exist')
            .and('be.visible');
    });

    // Test to verify the "Subscribe" button visibility and click functionality
    it('4. Test to click on "Subscribe" button for Free Plan', () => {
        // Verify that the button is visible and contains the text "Subscribe"
        cy.get('a.btn.btn-success.btn-block.transition-3d-hover.js-hs-unfold-invoker')
            .should('be.visible')
            .and('contain.text', 'Subscribe')
            .click(); // Perform the click action

        // Check if the sidebar content becomes visible after the click
        cy.get('#sidebarContent')
            .should('be.visible');

        cy.get('body').click(0, 0); // Click at the top-left corner of the body to close any opened dropdowns
    });

    // Test to check the visibility of the "Starter Plan" title and price
    it('5. Test to check "Starter Plan" title and price and other contents are present', () => {
        // Verify the "Starter Plan" title is visible and contains the correct text
        cy.get('span.d-block.h3')
            .should('be.visible')
            .and('contain.text', 'Starter Plan');

        // Verify the price of the "Starter Plan" is visible and contains the correct amount
        cy.get('.plan-price.font-size-4.font-weight-bold.text-primary')
            .should('be.visible')  // Ensure the price element is visible
            .and('contain.text', '$29.99'); // Verify the price text is correct

        // Check if the card body is present and visible
        cy.get('.card-body.py-0.px-3')
            .should('exist')
            .and('be.visible');

        // Verify "1,500 Requests / Monthly" text is present and visible
        cy.get('.card-body .media-body')
            .contains('1,500 Requests / Monthly')
            .should('exist')
            .and('be.visible');

        // Verify "Standard Support" text is present and visible
        cy.get('.card-body .media-body')
            .contains('Standard Support')
            .should('exist')
            .and('be.visible');
    });

    it('6. Test to click on "Subscribe" button for starter plan', () => {
        cy.get('a.btn.btn-success.btn-block.transition-3d-hover.js-hs-unfold-invoker') // Select the <a> element
            .should('be.visible') // Ensure the button is visible
            .and('contain.text', 'Subscribe') // Verify the text is correct
            .click(); // Perform the click action

        // Check for the expected text in the sidebar
        cy.get('.lead').should('contain.text', 'Sign in to APILayer');

        // Optional: Close the sidebar or click outside
        cy.get('body').click(0, 0); // Click at the top-left corner of the body to close any opened dropdowns
    });

    it('7. Test to check "Pro Plan" details are and other contents present', () => {
        // Check if the "Pro Plan" title is visible
        cy.componentVisiblityCheck('.card-header .h3', 'Pro Plan');

        // Check if the price for "Pro Plan" is visible
        cy.componentVisiblityCheck('.plan-price', '$49.99');

        // Check the first feature of "Pro Plan"
        cy.componentVisiblityCheck('.card .media-body', '4,500\nRequests / Monthly');

        // Check the second feature of "Pro Plan"
        cy.componentVisiblityCheck('.card .media-body', 'Standard Support');
    });

    it('8. Test to check "Custom Plan" details are present', () => {
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

    it('9. Test to check "Contact Us" button text for Custom Plan is present and verify that the form opens on click', () => {
        // Check if the "Contact Us" link is visible and contains the correct text
        cy.componentVisiblityCheck('.btn.btn-outline-primary', 'Contact\nUs');

        // Ensure the button is visible before clicking
        cy.get('.card-header:has(.h3:contains("Custom Plan"))')
            .find('a.btn.btn-outline-primary')
            .should('be.visible')
            .and('contain.text', 'Contact\nUs')
            .click();

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
