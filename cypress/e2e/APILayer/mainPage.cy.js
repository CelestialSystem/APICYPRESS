/// <reference types="cypress" />

describe("Test for launch of IPSTACK Geo Page from Featured APIS", function () {
  before(() => {
    cy.switchToURL('https://apilayer.com/');
  });

  it("1. Test to accept cookies if exists", () => {
    cy.AcceptCookies();
  })

  it("2. Test to scroll to last to see all content is loaded or not", () => {
    cy.get('.col-lg-12.nav-sm > .nav-link').scrollIntoView();
  })


  describe("Test for search field in top toolbar", function () {
    it("3. Test for launch of IPSTACK Geo Page from Featured APIS", () => {
      cy.get(':nth-child(2) > .row > :nth-child(1) > .card-body > .media > .api-icon-bg > .avatar-img').click();
    });

    it("4. Test to search or filter from top tool bar", () => {
      cy.get('#top-search-bar').type("IPSTACK");
      cy.get('.input-group-append > .btn > .fas').click();
      cy.get('h1').should('have.text', 'Search Results');
      cy.get('.col-lg-7 > :nth-child(2)').should('have.text', 'You searched for IPSTACK keyword.');
      cy.get('.col-md-12 > .font-size-1').should('have.text', '\nSearch returned 1 results for\n\nIPSTACK\n\n×\n\n\n');
    })

    it("5. Test to select IPSTACK product after performing search operation", () => {
      cy.get('.avatar-img').click();
    })

    it("6. Test to clear filter from filter text button", () => {
      cy.get('.font-size-1 > .btn').click();
    })
  });

  describe("Test for documentation page details", function () {
    it("7. Test to select documentation opetion from top tool bar", () => {
      cy.get('.navbar-nav > :nth-child(2) > .nav-link').click();
      cy.get('h1').should('have.text', 'How can we help?');
      cy.get('.col-lg-12.nav-sm > .nav-link').scrollIntoView();
      cy.get('.col-md-6 > .input-group > .form-control').type('limit{enter}');
      cy.get('.space-bottom-2 > .w-lg-80').children('.card').should('have.length', 2);
    })

    it("8. Test to select listed search items from documentation i.e Marketplace FAQ", () => {
      cy.get('[href="/docs/article/marketplace-faq"] > .card-body').click();

      cy.get('.h2').should('have.text', 'Marketplace FAQ');
      cy.get('.col-lg-12.nav-sm > .nav-link').scrollIntoView();
    })
  });

  it("9. Test to navigate back to APILayer main page", () => {
    cy.get('.navbar-nav > :nth-child(2) > .nav-link').click();
    cy.get('.navbar-nav-wrap > .navbar-brand > img').click();
    cy.get('.col-lg-12.nav-sm > .nav-link').scrollIntoView();
  })
});

