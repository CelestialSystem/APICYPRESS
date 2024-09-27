describe('Fixer reviews Page', () => {
    before(() => {
        cy.visit('https://apilayer.com/marketplace/fixer-api');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => { 
        cy.AcceptCookies();
    });

    it('2. Test to check the "Reviews" tab', () => {
        cy.componentVisiblityCheck('#reviews-tab > .d-md-flex > span');
    });

    it('3. Test to click on "Reviews" tab, "Reviews" card should be present', () => {
        cy.get('#reviews-tab > .d-md-flex > span').click();
    });

    it('4. Test to check "Review" count section present', () => {
        cy.componentVisiblityCheck('.display-4');
    });

    it('5. Test to check "Star" count present', () => {
        cy.componentVisiblityCheck('.card > .list-inline');
    });

    it('6. Test to check "Rating" container is present', () => {
        cy.componentVisiblityCheck('.mb-7 > .row > .col-lg-8');
    });
  });