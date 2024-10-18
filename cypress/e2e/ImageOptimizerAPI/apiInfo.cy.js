import { IMAGE_OPTIMIZER_API } from '../../resources/data';

describe('Image Optimizer API Info page', () => {
    before(() => {
        cy.visit(IMAGE_OPTIMIZER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('3. Test to verify API info tab content and its active status', () => {
        // Check if the 'Details' tab pane is visible
        cy.get('#details.tab-pane.active')
            .should('be.visible');

        // Verify the first paragraph content
        cy.get('#details article p')
            .contains('This API reduces and optimizes file size')
            .should('be.visible')
            .and('contain.text', 'Supports PNG and JPEG file formats.');

        // Verify the heading inside the article
        cy.get('#details article h4')
            .should('be.visible')
            .and('contain.text', 'What this API does ?');

        cy.get('#details article p')
            .invoke('text')
            .then((text) => {
                expect(text).to.include('Uses JPEG and PNG compress/optimize algorithms');
            });

        // Verify the paragraph about valid quality values
        cy.get('#details article p')
            .contains('You can play with the quality value')
            .should('be.visible');
    });

});
