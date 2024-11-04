import { NUMBERVERIFICATION_BASE_URL } from '../../resources/data';

describe('Number Verification Api Info page', () => {
    before(() => {
      cy.visit(NUMBERVERIFICATION_BASE_URL);
    });
  
    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is present or exists
        cy.AcceptCookies();
    });
  
    it('2. Test to check "Number Verification API" title is present', () => {
        cy.checkTextVisibility('Number Verification API');
    });
  
    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click({force:true});
        cy.componentVisiblityCheck('#details');
    });
  
    it('4. Test to check "Features" subtitle is present', () => {
        cy.checkTextVisibility('Features')
    });
  
    it('5. Test to check "Example Request" subtitle is present', () => {
        cy.checkTextVisibility('Example Request')
    });
  
    it('6. Test to check "Example Response" subtitle is present', () => {
        cy.get('article > :nth-child(13)').scrollIntoView();
        cy.checkTextVisibility('Example Response')
    });
  }); 