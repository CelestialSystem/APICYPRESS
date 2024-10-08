import { FIXER_BASE_URL } from '../../resources/data';

describe('Fixers APIs Info page', () => {
    before(() => {
        cy.visit(FIXER_BASE_URL);
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

    it('4. Test to check for "Avaialble Endpoint" section', () => {
        cy.componentVisiblityCheck('article > :nth-child(2)');
    });

    it('5. Test to check "Available Endpoint" list', () => {
        cy.componentVisiblityCheck('ul > :nth-child(1) > .badge', '/symbols');
        cy.componentVisiblityCheck(':nth-child(2) > .badge', '/latest');
        cy.componentVisiblityCheck(':nth-child(3) > .badge', '/convert');
        cy.componentVisiblityCheck(':nth-child(4) > .badge', '{date}');
        cy.componentVisiblityCheck(':nth-child(5) > .badge', '/timeseries');
        cy.componentVisiblityCheck(':nth-child(6) > .badge', 'fluctuation');
    });

    it('6. Test to check for "Supported Symbols" section', () => {
        cy.componentVisiblityCheck('article > :nth-child(4)', 'Supported Symbols');
    });

    it('7. Test to check "Tips" section', () => {
        cy.componentVisiblityCheck('article > :nth-child(7)', 'Tips');
    });
});