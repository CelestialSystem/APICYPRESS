import { SHORTURLAPI_BASE_URL } from '../../resources/data';

describe('URL Shortener API Home page', () => {
    before(() => {
        cy.visit(SHORTURLAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is present or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "URL Shortener API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'URL Shortener API');
    });

    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.componentVisiblityCheck('#subscribeButton', 'Subscribe for Free');
    });

    it('4. Test to check "Live Demo" button is present', () => {
        cy.componentVisiblityCheck('.show-code', 'Live Demo');
    });

    it('5. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('6. Test to click on "Live demo" button', () => {
        cy.get('.show-code').click();
        cy.componentVisiblityCheck('.sidebar-content');
        cy.get('body').click(0, 0);
    });

    it('7. Test to check "Pricing tab"  is present', () => {
        cy.componentVisiblityCheck('#pricing-tab', 'Pricing');
    });

    it('8. Test to check "API info" tab  is present', () => {
        cy.componentVisiblityCheck('#details-tab', 'API info');
    });

    it('9. Test to check "Documentation" tab  is present', () => {
        cy.componentVisiblityCheck('#documentation-tab', 'Documentation');
    });

    it('10. Test to check "Reviews" tab  is present', () => {
        cy.componentVisiblityCheck('#reviews-tab', 'Reviews');
    });

    it('11. Test to check "Related Products" container is present', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
    });

    it('12. Test to check footer is present', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });

    it('13. Test to check on the "URL Shortener API" description is present', () => {
        // Check if the description is visible
        cy.componentVisiblityCheck('.col-9 > div.mb-5', 'URL Shortener service with an API which provides extensive analytics backend.');
    });    

    it('14. Test to check on the "check the documentation" link is present', () => {
        cy.componentVisiblityCheck('p > a');
    });

    it('15. Test to check on the "check the documentation" link click', () => {
        cy.get('p > a').click();
        cy.checkTextVisibility('URL Shortener API Reference');
    });
});
