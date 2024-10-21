import { METATAGSAPI_BASE_URL } from '../../resources/data';

describe('Meta Tags API Home page', () => {
    before(() => {
      cy.visit(METATAGSAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });                   

    it('2. Test to check "Meta Tags API" title is present', () => {
        cy.checkHeaderAndDescription('Meta Tags API', 'Scrapes, parses and retrieves META tags of any URL as well as many other useful information.');
    });
  
    it('3. Test to click and check for button "Subscribe for Free"', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to check code example  is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('6. Test to check the "check the documentation" link is present and clickable', () => {
        cy.checkTheDocumentation('Meta Tags API Reference');
    });

    it('7. Test to check if all tabs are present', () => {
        cy.verifyTabs();
    });
   
    it('8. Test to check if "Related Products and Footer" is present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });
    
  }); 