import { SPELL_CHECKER_BASE_URL } from '../../resources/data';

describe('Spell Checker API info page', () => {
    before(() => {
      cy.visit(SPELL_CHECKER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Spell Checker API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Spell Checker API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('4. Check if the "Spell Checker API Code Sample image" is present and loaded', () => {
        cy.get('article img')
          .should('have.attr', 'src', 'https://assets.apilayer.com/apis/codes/spellchecker/spellchecker.png') 
          .and('be.visible'); 
    
        cy.get('article img').should(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });
    
  });