describe('News Source page', () => {
    before(() => {
        cy.visit('https://mediastack.com/');
        cy.wait(2000); // Wait for the page to load
    });

    it('0. Test to Accept Cookies if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
 
    it('1. Test to click on news source button', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.get('.header > .container > ul > :nth-child(3)').click();
    });
 
    it('2. Test to check on news source title is visible', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.componentVisiblityCheck('h2', 'News Sources');
    });
 
    it('3. Test to check on country list is visible', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.componentVisiblityCheck('.countries_list');
    });
 
});
 