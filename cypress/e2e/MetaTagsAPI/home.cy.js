import { METATAGSAPI_BASE_URL } from '../../resources/data';

describe('Meta Tags API Home page', () => {
    before(() => {
      cy.visit(METATAGSAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });                   

    it('2. Test to check "Meta Tags API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Meta Tags API');
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

    it('6. Test to check the "check the documentation" link is present and clickable', () => {
        cy.componentVisiblityCheck('p > a', 'check the documentation');
        cy.get('a[href="javascript:;"]').contains('check the documentation.').click();
        cy.checkTextVisibility('Meta Tags API Reference');
    });

    it('7. Test to click on "Live demo" button', () => {
        cy.get('.show-code').click();
        cy.componentVisiblityCheck('.sidebar-content');
        cy.get('body').click(0, 0);
    });

    it('8. Test to check "Pricing tab"  is present', () => {
        cy.componentVisiblityCheck('#pricing-tab', 'Pricing');
    });
    
    it('9. Test to check "API info" tab  is present', () => {
        cy.componentVisiblityCheck('#details-tab', 'API info');
    });

    it('10. Test to check "Documentation" tab  is present', () => {
        cy.componentVisiblityCheck('#documentation-tab', 'Documentation');
    });

    it('11. Test to check "Related Products" container is present', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
    });

    it('12. Test to check footer is present', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });
    
  }); 