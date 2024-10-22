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

    it('3. Test to check the "Bad Words Api & Detects bad words, swear words by performing profanity check in a given text." title is present', () => {
        cy.checkHeaderAndDescription('Bad Words API', 'Detects bad words, swear words by performing profanity check in a given text.')
    });

    it('4. Test to check the "code response" window is present', () => {
        cy.componentVisiblityCheck('.code-response');
    });

    it('5. Test to check the "Subscribe for free" button is present and click', () => {
        cy.checkSubscribeForFreeAndClick();
    });

    it('6. Test to check if all tabs are present', () => {
        it('6. Test to check if all tabs are present', () => {
            const extraTabs = [
                '#reviews-tab'
            ];
            cy.verifyTabs(extraTabs);
        });
    });

    it('7. Test to check on the "Live Demo" button click', () => {
        cy.liveDemo();
    });

    it('8. Test to check the "Related Products" title & footer is present', () => {
        cy.componentVisiblityCheck('.h1', 'Related Products');
        cy.checkRelatedProductAndFooter();
    });

});