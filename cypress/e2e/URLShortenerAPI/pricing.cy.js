import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Pricing page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "URL Shortener API" title is present', () => {
        cy.componentVisiblityCheck('h1, h2, h3, h4', 'URL Shortener API');
    });

    // Test to check visibility of the "Starter Plan" title
    it('3. Test to check "Starter Plan" is present', () => {
        cy.get('span.d-block.h3') // Select the span element with the appropriate classes
            .should('be.visible')  // Check that it is visible
            .and('contain.text', 'Starter Plan'); // Check that it contains the text "Starter Plan"
    });

    // Test to check visibility of the price for "Starter Plan"
    it('4. Test to check price of "Starter Plan" is present', () => {
        cy.get(':nth-child(1) > .card > .card-header > .mb-3 > .plan-price') // Adjust selector as needed
            .should('be.visible')  // Check that it is visible
            .and('contain.text', '$1.99'); // Check that it contains the price text
    });

    it('5. Test to click on "Subscribe" button', () => {
        // Click the "Subscribe" button using its class
        cy.get('a.btn.btn-success.btn-block.transition-3d-hover.js-hs-unfold-invoker')
            .should('be.visible') // Ensure the button is visible before clicking
            .click(); // Click the button
    
        // Check if the sidebar content is visible after clicking
        cy.componentVisiblityCheck('#sidebarContent');
    
        // Check for the expected text in the sidebar
        cy.get('.lead').should('contain.text', 'Sign in to APILayer');
    
        // Optional: Close the sidebar or click outside
        cy.get('body').click(0, 0); // Click at the top-left corner of the body to close any opened dropdowns
    });

    it('6. Test to check "Pro Plan" is present', () => {
        // Check if the "Pro Plan" title is visible
        cy.componentVisiblityCheck('.card-header .h3', 'Pro Plan');
    });
    
    it('7. Test to check price of "Pro Plan" is present', () => {
        // Check if the price for "Pro Plan" is visible
        cy.componentVisiblityCheck('.plan-price', '$9.99');
    });
    
    it('8. Test to check features of "Pro Plan" are present', () => {
        // Check the first feature of "Pro Plan"
        cy.componentVisiblityCheck('.card .media-body', '600,000\nRequests / Monthly');
        
        // Check the second feature of "Pro Plan"
        cy.componentVisiblityCheck('.card .media-body', 'Standard Support');
    });
    

    it('9. Test to check "Custom Plan" is present', () => {
        // Check if the "Custom Plan" title is visible
        cy.componentVisiblityCheck('.card-header .h3', 'Custom Plan');
    });
    
    it('10. Test to check "Volume" is present', () => {
        // Check if "Volume" text is visible
        cy.componentVisiblityCheck('.font-size-4.text-primary', 'Volume');
    });
    
    it('11. Test to check features of "Custom Plan" are present', () => {
        // Check if the feature text for "Custom Plan" is visible
        cy.componentVisiblityCheck('.card-body .media-body', 'Any requests volume you need');
    });

    it('12. Test to check "Contact Us" button text for Custom Plan is present and verify that the form opens on click', () => {
        // Check if the "Contact Us" link is visible and contains the correct text
        cy.componentVisiblityCheck('.btn.btn-outline-primary', 'Contact\nUs');
    
        // Ensure the button is visible before clicking
        cy.get(':nth-child(3) > .card > .card-header > .btn').should('be.visible').click();
    
        // Verify that the document is fully loaded
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
    
        // Check if the correct header is visible in the new page/form
        cy.componentVisiblityCheck('h1', 'Contact Sales & Customer Support');
    
        // Navigate back to the main page
        cy.navigateUrlwithCookies(SHORTURLAPI_BASE_URL);
    });
});
