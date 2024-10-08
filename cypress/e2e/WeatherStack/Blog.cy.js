import { WEATHERSTACK_BASE_URL } from '../../resources/data';

describe('Weatherstack Blog page', () => {
    before(() => {
        cy.visit(WEATHERSTACK_BASE_URL);
    });

    it('1. Test naviagate to the "Blog" page', () => {
        cy.AcceptCookies();
        cy.get('.header > .container > ul > :nth-child(5) > a').click();
        cy.AcceptCookies();
    });

    it('2. Test to check the text "Welcome to our Weatherstack Blog!"', () => {
        cy.checkTextVisibility('Welcome to our Weatherstack Blog!');
    });

    it('3. Test to check the "RECENT POST" section is present', () => {
        cy.componentVisiblityCheck('.et_pb_text_2', 'RECENT POST');
    });

    it('4. Test to check the "TOP POST" section is present', () => {
        cy.componentVisiblityCheck('.et_pb_text_3', 'TOP POST');
    });

    it('5. Test to check for the blog "Real-Time Weather Data | How E-commerce Platforms Can Benefit"', () => {
        cy.checkTextVisibility('Real-Time Weather Data | How E-commerce Platforms Can Benefit');
    });

    it('6. Test to check for pagination bar is present', () => {
        cy.componentVisiblityCheck('.wp-pagenavi');
    });

    it('7. Test to check navigate to 2 page', () => {
        cy.componentVisiblityCheck('[title="Page 2"]').click();
    });

    it('8. Test to click on the footer link of "Blog"', () => {
        cy.get('.et_pb_column_2_tb_footer > .et_pb_module > .et_pb_text_inner > .li-bg > :nth-child(3)').click();
        cy.checkTextVisibility('Welcome to our Weatherstack Blog!');
    });
});