import { SMART_IMAGE_CROPPING_BASE_URL } from '../../resources/data';

describe('Smart Image Cropping Home page', () => {
    before(() => {
        cy.visit(SMART_IMAGE_CROPPING_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Smart Image Cropping API" title is present', () => {
        cy.checkTextVisibility('Smart Image Cropping API');
    });

    it('3. Test to check if text "Smart image cropping API that can intelligently identify important elements of an image and retain it during cropping" is present', () => {
        cy.checkTextVisibility('Smart image cropping API that can intelligently identify important elements of an image and retain it during cropping');
    });

    it('4. Test to click and check for button "Subscribe for Free"', () => {
        cy.componentVisiblityCheck('#subscribeButton', "Subscribe for Free");
        cy.get('#subscribeButton').click();
        cy.get('#pricing').should('be.visible');
        cy.checkIfScrolledToEl('#pricing');
    });

    it('5. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
    });

    it('6. Test to check on "Code example" window is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });
   
    it('7. Test to click link "check the documentation."', () => {
        cy.get('a').contains('check the documentation.').click();
        cy.checkTextVisibility('Smart Image Cropping API Reference');
    });
    
    it('8. Test to check if all tabs are present', () => {
        cy.get('.nav-item > #pricing-tab').should('be.visible');
        cy.get('.nav-item > #details-tab').should('be.visible');
        cy.get('.nav-item > #documentation-tab').should('be.visible');
    });
   
    it('9. Test to check if "Related Products" is present', () => {
        cy.componentVisiblityCheck('#related');
    });
    
    it('10. Test to check if footer is present', () => {
        cy.componentVisiblityCheck('footer');
    });
});