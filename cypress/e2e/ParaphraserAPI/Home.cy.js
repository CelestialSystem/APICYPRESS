import { PARAPRASER_API } from '../../resources/data';

describe('Paraphraser API Home page', () => {
    before(() => {
      cy.visit(PARAPRASER_API);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is present or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Paraphraser API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Paraphraser API');
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

    it('10. Test to check "Related Products" container is present', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
    });

    it('11. Test to check footer is present', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });

    it('12. Test to click "check the documentation" hyperlink is working', () => {
        cy.componentVisiblityCheck('.mt-3 > p > a', 'check the documentation');
        cy.get('a[href="javascript:;"]').contains('check the documentation.').click();
        cy.checkTextVisibility('Paraphraser API Reference');
    });
  });