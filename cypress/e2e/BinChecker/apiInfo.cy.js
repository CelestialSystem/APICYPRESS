import { BINCHECKER_BASE_URL } from '../../resources/data';

describe('Bin checker APIs Info page', ()=> {
    before(()=> {
        cy.visit(BINCHECKER_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to check for the "API Info" tab is present', () => {
        cy.componentVisiblityCheck('#details-tab > .d-md-flex > span');
    });

    it('3. Test to click on the "API Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
    });

    it('4. Test to check for "What is Bin" section', () => {
        cy.componentVisiblityCheck('[itemtype="https://schema.org/FAQPage"] > :nth-child(1) > [itemscope=""] > div');
    });

    it('5. Test to check for the card image', () => {
        cy.componentVisiblityCheck('.w-md-50');
    });

    it('6. Test to check for "What is Bin checker api" section', () => {
        cy.componentVisiblityCheck('[itemtype="https://schema.org/FAQPage"] > :nth-child(2) > [itemscope=""] > div');
    });

    it('7. Test to check for "See it in action!" section', () => {
        cy.componentVisiblityCheck('[itemtype="https://schema.org/FAQPage"] > .fluid');
    });

    it('8. Test to check for "Is Bin checker API Secure" section', () => {
        cy.componentVisiblityCheck(':nth-child(5) > [itemscope=""] > div > p');
    });

    it('9. Test to check for "What is Bin Checker API used for" section', () => {
        cy.componentVisiblityCheck(':nth-child(6) > [itemscope=""] > div > p');
    });

    it('10. Test to check for "What is Bin Checker API used for" list', () => {
        cy.componentVisiblityCheck(':nth-child(6) > [itemscope=""] > div > ul > :nth-child(1)');
        cy.componentVisiblityCheck(':nth-child(6) > [itemscope=""] > div > ul > :nth-child(2)');
    });

    it('11. Test to check for "How to start" section', () => {
        cy.componentVisiblityCheck('article > :nth-child(4)');
    });

    it('12. Test to check for "How to start" code window is present', () => {
        cy.componentVisiblityCheck('.my-4');
    });

});