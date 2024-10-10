import { SCREESHOTLAYER_BASE_URL } from '../../resources/data';

describe('ScreenshotLayer Home page', () => {
    before(() => {
        cy.visit(SCREESHOTLAYER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the text "Capture highly customizable snapshots of any website" is present', () => {
        cy.checkTextVisibility('Capture highly customizable snapshots of any website');
    });

    it('3. Test to check the text "Powerful Screenshot API for any application" is present', () => {
        cy.checkTextVisibility('Powerful Screenshot API for any application')
    });

    it('4. Test to check "Screenshot URL" field is present', () => {
        cy.componentVisiblityCheck('#screenshot_url');
    });

    it('6. Test to check "Capture" button is present', () => {
        cy.componentVisiblityCheck('#capture_form > .capture_actions');
    });

    it('7. Test to check "Reliable & Queueless Screenshot Automation" text is present', () => {
        cy.componentVisiblityCheck('.presentation_title', ' Reliable & Queueless Screenshot Automation')
    });

    it('8. Test to check the "URL to screenshot" option is present', () => {
        cy.checkTextVisibility('URL to Screenshot');
    });

    it('9. Test to check  the "Simple & Fast API" option is present', () => {
        cy.checkTextVisibility('Simple & Fast API')
    });

    it('10. Test to check "Advanced Options" option is present', () => {
        cy.checkTextVisibility('Advanced Options')
    });

    it('11. Test to check the text "Easy on your Budget" text', () => {
        cy.checkTextVisibility('Easy on your Budget');
    });

    it('12. Test to click on the "URL to screenshot" option', () => {
        cy.get('.images').click();
    });

    it('13. Test to check all "URL to screenshot" options are present', () => {
        cy.get('.container.active > .promo_target_box').should('contain.text', 'Website Screenshots')
            .and('contain.text', 'Rendering Engine')
            .and('contain.text', '256-bit HTTPS')
            .and('contain.text', 'Interactive Documentation')
            .and('contain.text', 'World-Class Tech Support')
            .and('contain.text', 'Extended Usage Statistics');
    });

//////////////////////////////////
    it('13. Test to click on the "Simple & Fast API" option', () => {
        cy.get('.speed').click();
    });

    it('14. Test to check the text "Advanced Export Options" option', () => {
        cy.componentVisiblityCheck('.export', 'Advanced Export Options');
        cy.componentVisiblityCheck('.integration', 'Integrate anywhere, any way');
    });

    it('15. Test to check the text "Integrate anywhere, any way" option', () => {
        cy.componentVisiblityCheck('.integration', 'Integrate anywhere, any way');
    });

    it('16. Test to click  on the "Documentation" button it should navigate to the "Documentation" page', () => {
        cy.get('.inside > .no_deco').click();
        cy.checkTextVisibility('API Documentation');
        cy.go('back');
    });

    it('17. Test to check the text "Codebox" is present', () => {
        cy.get('.codebox').scrollIntoView();
        cy.componentVisiblityCheck('.codebox')
    });

    it('18. Test to check the text "Codebox" tabs are present and clickable', () => {
        cy.get('#open_code_1').should('contain.text', 'FULL-HEIGHT').click();
        cy.get('#open_code_2').should('contain.text', 'THUMBNAIL').click();
        cy.get('#open_code_3').should('contain.text', 'HTTP HEADERS').click();
    });


////////////////////////////
    it('19. Test to click on "Advanced Options" option', () => {
        cy.get('.magic').click();
    });

    it('20. Test to check all "URL to screenshot" options are present', () => {
        cy.get('.container.active > .promo_target_box').should('contain.text', 'Dimensions')
            .and('contain.text', 'Viewport Control')
            .and('contain.text', 'Placeholder')
            .and('contain.text', 'Custom CSS')
            .and('contain.text', 'Timing')
            .and('contain.text', '[ and more ]');
    });

///////////////////
    it('15. Test to click on the text "Easy on your Budget" text', () => {
        cy.get(':nth-child(4) > .href_on_mobile > .inside > .budget_coins').click();
    });

    // it('12. Test to check by clicking of the "API Documentation" button', () => {
    //     cy.componentVisiblityCheck('.secondary').click();
    //     cy.componentVisiblityCheck(':nth-child(1) > h2', 'API Documentation');
    //     cy.go('back');
    // });

    // it('13. Test to check the text "Real-Time Geocoding"', () => {
    //     cy.componentVisiblityCheck('.geocode > .heading', 'Real-Time Geocoding')
    // });

    // it('14. Test to check the text "Scalable Infrastructure"', () => {
    //     cy.componentVisiblityCheck('.scalable > .heading', 'Scalable Infrastructure')
    // });

    // it('15. Test to check the text "Worldwide Coverage" ', () => {
    //     cy.componentVisiblityCheck('.coverage > .heading', 'Worldwide Coverage')
    // });

    // it('16. Test to check text "Fair Pricing"', () => {
    //     cy.componentVisiblityCheck('.pricing > .heading', 'Fair Pricing')
    // });

    // it('17. Test to check for the text "Effortless geocoding and embeddable maps. Integration takes less than 5 minutes"', () => {
    //     cy.componentVisiblityCheck('.left_side > h2', 'Effortless geocoding and embeddable maps. Integration takes less than 5 minutes.')
    // });

    // it('18. Test to check for the text "Forward Geocoding" option', () => {
    //     cy.componentVisiblityCheck('.forward', 'Forward Geocoding');
    // });

    // it('19. Test to check for the text "Reverse Geocoding" option', () => {
    //     cy.componentVisiblityCheck('.reverse', 'Reverse Geocoding');
    // });

    // it('20. Test to check for the text "Batch Requests" option', () => {
    //     cy.componentVisiblityCheck('.batch', 'Batch Requests');
    // });

    // it('21. Test to check for the text "Embeddable Maps" option', () => {
    //     cy.componentVisiblityCheck('.maps', 'Embeddable Maps');
    // });

    // it('22. Test to check for the text "JSON, XML & GeoJSON" option', () => {
    //     cy.componentVisiblityCheck('.format', 'JSON, XML & GeoJSON');
    // });

    // it('23. Test to check for the text "Multiple Languages" option', () => {
    //     cy.componentVisiblityCheck('ul > .languages', 'Multiple Languages');
    // });

    // it('24. Test to check for input field of location in the "GEO CODE" section', () => {
    //     cy.componentVisiblityCheck('input');
    // });

    // it('25. Test to check "GEO CODE" button', () => {
    //     cy.componentVisiblityCheck('.button');
    // });

    // it('26. Test to check for input field of the GEO CODE" section', () => {
    //     cy.get('input').type('United States');
    // });

    // it('27. Test to check "GEO CODE" button and check the code is present', () => {
    //     cy.get('button').click({ multiple: true });
    //     cy.componentVisiblityCheck('.prettyprint');
    // });

    // it('28. Test to check the "Sign Up Free" button', () => {
    //     cy.get('.container > p > a').click();
    //     cy.go('back');
    // });
});