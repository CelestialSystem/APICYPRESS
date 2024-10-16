import { SMART_IMAGE_CROPPING_BASE_URL } from '../../resources/data';

describe('Smart Image Cropping API Info page', () => {
    before(() => {
        cy.visit(SMART_IMAGE_CROPPING_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });
    
    it('3. Test to check for the title "Use cases"', () => {
        cy.checkTextVisibility('Use cases');
    });
    
    it('4. Test to check for the title "How it works"', () => {
        cy.checkTextVisibility('How it works');
    });

    it('5. Test to check for the title "What is Saliency Detection?"', () => {
        cy.checkTextVisibility('What is Saliency Detection?');
    });

    it('6. Test to check for the title "Conclusion"', () => {
        cy.checkTextVisibility('Conclusion');
    });
});