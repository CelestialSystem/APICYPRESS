import { BINCHECKER_BASE_URL } from '../../resources/data';

describe('Bin checker APIs Documentation page', ()=> {
    before(()=> {
        cy.visit(BINCHECKER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check "Documentation" tab visibility', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('3. Test to click "Documentation" tab', () => {
        cy.get('.d-md-flex > .d-none').click();
    });

    it('4. Test to check "Contents" section', () => {
        cy.componentVisiblityCheck('.sticky-top');
    });

    it('5. Test to check "Authentication" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(1) > a', 'Authentication');
    });

    it('6. Test to click on "Authentication" hyperlink and check "Authentication" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(1) > a').click();
        cy.componentVisiblityCheck('.col-sm-12 > :nth-child(4)', 'Authentication');
    });

    it('7. Test to check "Endpoints" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(2) > a', 'Endpoints');
    });
  
    it('8. Test to click on "Endpoints" hyperlink and check "Endpoints" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(2) > a').click();
        cy.componentVisiblityCheck(':nth-child(9) > a', 'Endpoints');
    });

    it('9. Test to check "Rate Limiting" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(3) > a', 'Rate Limiting');
    });
  
    it('10. Test to click on "Rate Limiting" hyperlink and check "Rate Limiting" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(11) > a', 'Rate Limiting');
    });

    it('11. Test to check "Error Codes" hyperlink is present', () => {
        cy.componentVisiblityCheck('.sticky-top > ul > :nth-child(4) > a', 'Error Codes');
    });
  
    it('12. Test to click on "Error Codes" hyperlink and check "Error Codes" title is present', () => {
        cy.get('.sticky-top > ul > :nth-child(4) > a').click();
        cy.componentVisiblityCheck(':nth-child(19) > a', 'Error Codes');
    });

    it('13. Test to check on "Just getting started" section', () => {
        cy.componentVisiblityCheck('.blockquote');
    });

    it('14. Test to check on "development quickstart guide" link is present', () => {
        cy.componentVisiblityCheck('.blockquote > p > a');
    });

    it('15. Test to check on "development quickstart guide" link click', () => {
        cy.get('.blockquote > p > a').click();
    });
});