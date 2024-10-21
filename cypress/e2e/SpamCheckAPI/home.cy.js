import { SPAM_CHECK_API_BASE_URL } from '../../resources/data';

describe('Spam Check API Home page', () => {
    before(() => {
      cy.visit(SPAM_CHECK_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   
    
    it('2. Test to check "header and Description" title is present', () => {
        cy.checkHeaderAndDescription('Spam Check API', 'Performs robust scoring algorithms to a given text and classifies it as spam or not.');
    });
 
    it('3. Test to check "Subscribe for free" button is present', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('4. Test to check "Live Demo" button is present and functionality', () => {
        cy.liveDemo();
    });

    it('5. Test to check " pricing, api info and the documetation" tabs are present', () => {
        cy.verifyTabs();
    });

    it('6. Verifying that the "related products and the footer" are present', () => {
        cy.checkRelatedProductAndFooter();
    });

    it('7. Test to check the "check the documentation" link is present and clickable', () => {
        cy.checkTheDocumentation('Spam Check API Reference');
    });

    it('9. Test to check the "visibility of the review rating section" present and clickable', () => {
        cy.checkReviewRating();
    });

  });