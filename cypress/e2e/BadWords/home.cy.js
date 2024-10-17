import { BADWORDS_BASE_URL } from '../../resources/data';

describe('Bad words api Home page', () => {
    before(() => {
        cy.visit(BADWORDS_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check the bad words api logo is present', () => {
        cy.componentVisiblityCheck('.col-3 > .avatar-img');
    });

    it('3. Test to check the "Bad Words Api" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Bad Words API');
    });

    it('4. Test to check the "Bad Words Api" description is present', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)');
    });

    it('5. Test to check the "code response" window is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('6. Test to check the "Subscribe for free" button is present', () => {
        cy.componentVisiblityCheck('#subscribeButton')
    });

    it('7. Test to check the "Live Demo" button is present', () => {
        cy.componentVisiblityCheck('.show-code');
    });

    it('8. Test to check the text "Prcing" tab is present', () => {
        cy.componentVisiblityCheck('#pricing-tab > .d-md-flex > span');
    });

    it('9. Test to check the "API Info" tab is present', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('10. Test to check the "Documentation" tab is present', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('11. Test to check the "Review" tab is present', () => {
        cy.componentVisiblityCheck('#reviews-tab > .d-md-flex > span');
    });

    it('12. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
        // Adding wait due to the css animation of 300 ms
        cy.wait(500); 
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
    });

    it('13. Test to check the "Related Products" title is present', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
    });

    it('14. Test to check on the "footer" is present', () => {
        cy.componentVisiblityCheck('footer.bg-primary');
    });
});