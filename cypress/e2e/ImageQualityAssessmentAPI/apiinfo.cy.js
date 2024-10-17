import { IMAGE_QUALITY_ASSESSMENT_BASE_URL } from '../../resources/data';

describe('Image Quality Assessment API info page', () => {
    before(() => {
      cy.visit(IMAGE_QUALITY_ASSESSMENT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Image Quality Assessment API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Image Quality Assessment API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.checkTextVisibility('What is Image Quality Assessment?');
    });

    it('4. Test to check "What is Image Quality Assessment?" title is present', () => {
        cy.checkTextVisibility('What is Image Quality Assessment?');
    });

    it('5. Test to check "Use cases" title is present', () => {
        cy.checkTextVisibility('Use cases');
    });

    it('6. Test to check "You can use this service for:" items are present', () => {
        cy.checkTextVisibility('Use cases');
    });

    it('7. check the Image Quality features are displayed correctly on the front page', () => {
        const imageQualityFeatures = [
            'Determining the best image of the product to display on the front page',
            'Sort the products/listings based on the image quality score on your e-commerce site',
            'Show only the high-quality images for adverts',
            'Only permitting high-quality images for your listing/product'
        ];
    
        imageQualityFeatures.forEach((feature) => {
            cy.get('ul').should('contain.text', feature);
        });
    });

    it('8. Test to check "Evaluating an image on a URL" items are present', () => {
        cy.checkTextVisibility('Evaluating an image on a URL');
    });

    it('9. Test to click on "subscribing to the service" hyperlink', () => {
        //using the nth child because having the multiple subscribing to the service hyperlink in the same page 
        cy.get(':nth-child(9) > .subscribe-action').click();
        cy.checkTextVisibility('Image Quality Assessment API');
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('10. Test to click on "get your API key" and check if the new page has "API Marketplace" link', () => {
        cy.contains('a', 'get your API key').click({force: true});
        cy.get('a.text-dark[href="/"]')
          .and('have.text', 'API Marketplace');
        cy.navigateUrlwithCookies(IMAGE_QUALITY_ASSESSMENT_BASE_URL);
         cy.get('#details-tab > .d-md-flex > span').click();
    });

    //it wil open an image in local 
    // it('11. Test to click on "get your API key" hyperlink', () => {
    //     cy.get('[href="https://assets.apilayer.com/apis/codes/image_quality/sample.jpg"]').click();
    //     cy.checkTextVisibility('Image Quality Assessment API');
    //     cy.get('#details-tab > .d-md-flex > span').click();
    // });

    it('12. Test to check if code blocks is present', () => {
        cy.componentVisiblityCheck('.language-shell');
        cy.componentVisiblityCheck('.language-javascript');
    });

    it('13. Test to check " Evaluating an image from local file" items are present', () => {
        cy.checkTextVisibility(' Evaluating an image from local file');
    });

    it('14. Test to check "Related Articles" items are present', () => {
        cy.checkTextVisibility('Related Articles');
    });

  });
