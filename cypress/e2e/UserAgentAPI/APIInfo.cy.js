import { USER_AGENT_BASE_URL } from '../../resources/data';

describe('User Agent API Info page', () => {
    before(() => {
        cy.visit(USER_AGENT_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('2. Test to click on the "API Info" tab', () => {
        cy.get('#details-tab').click();
    });

    it('3. Test to check if title text\'s in the page', () => {
        cy.checkTextVisibility('How do I use the User Agent API?');
        cy.checkTextVisibility('Parsing the User Agent Strings');
        cy.checkTextVisibility('Generating Random User Agent Strings');
        cy.checkTextVisibility('What is the benefit of using User Agent API?');
    });

    it('4. Test to check if code blocks is present', () => {
        cy.componentVisiblityCheck('.language-shell');
        cy.componentVisiblityCheck('.language-javascript');
    });

});