describe('MediaStack News Source page', () => {
    before(() => {
        cy.visit('https://mediastack.com/');
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });
 
    it('2. Test to click on "News Source" button', () => {
        cy.get('.header > .container > ul > :nth-child(3)').click();
    });
 
    it('3. Test to check on "News Source" title is present', () => {
        cy.componentVisiblityCheck('h2', 'News Sources');
    });
 
    it('4. Test to check on "Country List" is present', () => {
        cy.componentVisiblityCheck('.countries_list');
    });
 
});
 