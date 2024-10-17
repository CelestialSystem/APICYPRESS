import { TEXT_TO_EMOTION_BASE_URL } from '../../resources/data';

describe('Text to Emotion home page', () => {
    before(() => {
        cy.visit(TEXT_TO_EMOTION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Text to Emotion API" text is present', () => {
        cy.checkTextVisibility('Text to Emotion API');
    });

    it('3. Test to check if text "Discover the emotions in textual messages automatically using NLP." is present', () => {
        cy.checkTextVisibility('Discover the emotions in textual messages automatically using NLP.');
    });

    it('4. Test to click and check for button "Subscribe for Free"', () => {
        cy.componentVisiblityCheck('#subscribeButton', "Subscribe for Free");
        cy.get('#subscribeButton').click();
        cy.get('#pricing').should('be.visible');
        cy.checkIfScrolledToEl('#pricing');
    });

    it('5. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
        // Adding wait due to the css animation of 300 ms
        cy.wait(500);
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
        cy.get('body').click();
    });
   
    it('6. Test to click link "check the documentation."', () => {
        cy.get('a').contains('check the documentation.').click();
    });
    
    it('7. Test to check if all tabs are present', () => {
        cy.get('.nav-item > #pricing-tab').should('be.visible');
        cy.get('.nav-item > #details-tab').should('be.visible');
        cy.get('.nav-item > #documentation-tab').should('be.visible');
    });
   
    it('8. Test to check if "Related Products" is present', () => {
        cy.componentVisiblityCheck('#related');
    });
    
    it('9. Test to check if footer is present', () => {
        cy.componentVisiblityCheck('footer');
    });
    
    it('10. Test to check if code block is present', () => {
        cy.componentVisiblityCheck('.language-javascript');
    });

});