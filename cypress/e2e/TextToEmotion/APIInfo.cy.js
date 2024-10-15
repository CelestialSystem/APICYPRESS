import { TEXT_TO_EMOTION_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Text to Emotion API Info page', () => {
    before(() => {
        cy.visit(TEXT_TO_EMOTION_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API Info" tab', () => {
        cy.get('#details-tab').click();
    });

    it('3. Test to check if title text\'s in the page', () => {
        cy.checkTextVisibility('How it works');
        cy.checkTextVisibility('Sample');
        cy.checkTextVisibility('How accurate is the API?');
        cy.checkTextVisibility('Handling of Emojis');
        cy.checkTextVisibility('Use cases');
        cy.checkTextVisibility('How is Emotion Detection different from Sentiment Analysis?');
    });

    it('4. Test to check and click link "Sentiment Analysis API."', () => {
        cy.get('a').contains('Sentiment Analysis API.').click();
        cy.url().should('eq', APILAYER_BASE_URL +  '/marketplace/sentiment-api');
        cy.go('back');
        cy.get('#details-tab').click();
    });

    it('5. Test to check if code blocks is present', () => {
        cy.componentVisiblityCheck('.language-shell');
        cy.componentVisiblityCheck('.language-javascript');
    });

});