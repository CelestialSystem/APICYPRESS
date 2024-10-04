import { MARKETSTACK_BASE_URL } from '../../resources/data';

describe('MarketStack Stock Search page', () => {
  before(() => {
    cy.visit(MARKETSTACK_BASE_URL);
  });

  it('1. Test to "Accept Cookies" if not already accepted', () => {
    // Check if the "Accept Cookies" button is visible or exists
    cy.AcceptCookies();
  });

  it('2. Test to check "Status" hyperlink is present', () => {
      cy.componentVisiblityCheck('.header > .container > ul > :nth-child(3) > a');
  });

  it('3. Test to click on "Stock Search" hyperlink', () => {
      cy.get('.header > .container > ul > :nth-child(3) > a').click();
  });

  it('4. Test to check "Stock Tickers & Exchanges" title is present', () => {
      cy.componentVisiblityCheck('h2', 'Stock Tickers & Exchanges');
  });
  
  it('5. Test to check "Stock Ticker input" is present', () => {
      cy.componentVisiblityCheck('#ticker');
  });

  it('6. Test to check "Stock Exchange dropdown" is present', () => {
      cy.componentVisiblityCheck('#exchange');
  });

  it('7. Test to check "Search Stock Button" is present', () => {
      cy.componentVisiblityCheck('#submit'); // Ensure this selector is correct
  });

  it('8. Test to check "Previous Button" is present', () => {
      cy.get('[data-paginate="prev"]').scrollIntoView();
      cy.componentVisiblityCheck('[data-paginate="prev"]');
  });

  it('9. Test to check "Next Button" is present', () => {
      cy.componentVisiblityCheck('[data-paginate="next"]');
  });
});
