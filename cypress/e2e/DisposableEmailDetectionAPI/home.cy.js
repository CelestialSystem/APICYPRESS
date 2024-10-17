import { DISPOSABLE_EMAIL_API } from '../../resources/data';

describe('Disposable Email Detection API Home page', () => {
    before(() => {
        cy.visit(DISPOSABLE_EMAIL_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is present or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Disposable Email Detection API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Disposable Email Detection API');
    });

    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.componentVisiblityCheck('#subscribeButton', 'Subscribe for Free');
    });

    it('4. Test to check "Live Demo" button is present and clickable', () => {
        // Check if the "Live Demo" button is visible
        cy.componentVisiblityCheck('.show-code', 'Live Demo');

        // Click the "Live Demo" button
        cy.get('.show-code').click();

        // Verify that the sidebar content is visible after clicking the button
        cy.componentVisiblityCheck('.sidebar-content');

        // Click on the body to close any open elements
        cy.get('body').click(0, 0);
    });

    it('5. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('6. Test to check "Pricing tab"  is present', () => {
        cy.componentVisiblityCheck('#pricing-tab', 'Pricing');
    });

    it('7. Test to check "API info" tab  is present', () => {
        cy.componentVisiblityCheck('#details-tab', 'API info');
    });

    it('8. Test to check "Documentation" tab  is present', () => {
        cy.componentVisiblityCheck('#documentation-tab', 'Documentation');
    });

    it('9. Test to check "Related Products" container is present', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
    });

    it('10. Test to check footer is present', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });

    it('11. Test to check on the "Disposable Email Detection API" description is present', () => {
        // Check if the description is visible
        cy.componentVisiblityCheck('.col-9 > div.mb-5', 'Detects disposable, fake and throwaway email addresses in lightning speed.');
    });

    it('12. Test to check the "check the documentation" link is present and clickable', () => {
        // Check if the "check the documentation" link is visible
        cy.componentVisiblityCheck('p > a', 'check the documentation');

        // Click the "check the documentation" link
        cy.get('a[href="javascript:;"]').contains('check the documentation.').click();

        // Verify that the expected text is visible after the link is clicked
        cy.checkTextVisibility('Disposable Email Detection API Reference');
    });

    it('13. Test to check APILayer link, logo, and review stars', () => {
        // Check if the APILayer link is present and visible
        cy.get('.media.align-items-center[href="/"]')
            .should('exist')
            .and('be.visible');

        // Verify the APILayer text is present
        cy.get('.media-body.font-size-1.text-body')
            .contains('APILayer')
            .should('exist')
            .and('be.visible');

        // Check if 5 review stars are present and visible
        cy.get('.d-flex.align-items-center li img[alt="Review rating"]')
            .and('be.visible');
    });
});
