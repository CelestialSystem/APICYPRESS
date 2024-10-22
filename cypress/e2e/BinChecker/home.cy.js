import { BINCHECKER_BASE_URL } from '../../resources/data';

describe('Bin checker home page', ()=> {
    before(()=> {
        cy.visit(BINCHECKER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "Bin Checker api" avatar image is present', () => {
        cy.componentVisiblityCheck('.col-3 > .avatar-img');
    });

    it('3. Test to check for the "Bin Checker api" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'BIN Checker API');
    });

    it('4. Test to check for the "Bin Checker api" description is present', () => {
        cy.componentVisiblityCheck('.col-9 > :nth-child(2)');
    });

    it('5. Test to check for the "Bin Checker Api" Layer avatar image is present', () => {
        cy.componentVisiblityCheck('.justify-content-between > .media > .avatar > .avatar-img');
    });

    it('6. Test to check for the "APILayer" text is present', () => {
        cy.checkTextVisibility('APILayer');
    });

    it('7. Test to check the "Code Response" window is present', () => {
        cy.get('.mt-3 > p > a').click();
        cy.checkTextVisibility('BIN Checker API Reference')
    });

    it('8. Test to check the "Subscribe for free" button is present', () => {
        cy.componentVisiblityCheck('#subscribeButton')
    });

    it('9. Test to check the "Live Demo" button is present', () => {
        cy.componentVisiblityCheck('.show-code');
    });

    it('10. Test to check on the "Live Demo" button click', () => {
        cy.get('.show-code').click();
        // Adding wait due to the css animation of 300 ms
        cy.wait(500); 
        cy.get('.sidebar-content', { timeout: 7000 }).should('be.visible');
    });
 
    it('11. Test to check for text "Sign in to APILayer" is present', () => {
        cy.get('.lead').should('contains.text', 'Sign in to APILayer');
        cy.get('.hs-unfold > .js-hs-unfold-invoker').click();
    })

    it('12. Test to check the text "Prcing" tab is present', () => {
        cy.componentVisiblityCheck('#pricing-tab > .d-md-flex > span');
    });

    it('13. Test to check the "API Info" tab is present', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('14. Test to check the "Documentation" tab is present', () => {
        cy.componentVisiblityCheck('.d-md-flex > .d-none');
    });

    it('15. Test to check the "Related Products" title is present', () => {
        cy.checkTextVisibility('Related Products');
    });

    it('16. Test to check the footer is present', () => {
        cy.componentVisiblityCheck('.bg-primary');
    });
});