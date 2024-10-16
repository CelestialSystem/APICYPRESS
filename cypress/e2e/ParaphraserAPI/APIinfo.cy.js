import { PARAPRASER_API } from '../../resources/data';

describe('Paraphraser API Info page', () => {
    before(() => {
      cy.visit(PARAPRASER_API);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        // Check if the "Accept Cookies" button is visible or exists
        cy.AcceptCookies();
    });

    it('2. Test to check "Paraphraser API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Paraphraser API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.componentVisiblityCheck('#details');
    });

    it('4. Test to check "I have a dream that one day this nation will rise up and live out the true meaning of its creed: We hold these truths to be self-evident, that all men are created equal." subtitle is present', () => {
         cy.checkTextVisibility('I have a dream that one day this nation will rise up and live out the true meaning of its creed: We hold these truths to be self-evident, that all men are created equal.');
    });
});
