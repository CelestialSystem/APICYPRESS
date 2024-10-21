import { SKILLS_BASE_URL } from '../../resources/data';

describe('Skills API Home page', () => {
    before(() => {
      cy.visit(SKILLS_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Skills API" title is present', () => {
        cy.checkHeaderAndDescription('Skills API', 'Searchable database of 70000+ skills well-organized and categorized.');
    });

    it('3. Test to click and check for button "Subscribe for Free"', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('5. Test to check on "Code example" window is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('6. Test to click link "check the documentation."', () => {
        cy.checkTheDocumentation('Skills API Reference');
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