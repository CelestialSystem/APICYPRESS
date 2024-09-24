describe('Stock Search Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
      cy.visit('https://marketstack.com/');
      cy.wait(2000); // Wait for the page to load
    });
  
    it('0. Test to Accept Cookies if not already accepted', () => {
      // Check if the "Accept Cookies" button is visible or exists
      cy.AcceptCookies();
    });
  
    it('1. Test to check status hyperlink is there', () => {
        cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3) > a');
    });

    it('2. Test to click on Stock Search hyperlink', () => {
        cy.get('.header > .container > ul > :nth-child(3) > a').click();
    });
  });
