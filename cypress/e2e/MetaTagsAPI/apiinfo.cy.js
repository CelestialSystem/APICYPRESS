import { METATAGSAPI_BASE_URL } from '../../resources/data';

describe('Meta Tags API info page', () => {
    before(() => {
      cy.visit(METATAGSAPI_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Meta Tags API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Meta Tags API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.checkTextVisibility('Do Meta Tags Help with SEO');
    });

    it('4. Test to check "Do Meta Tags Help with SEO" title is present', () => {
        cy.get('article h4').first().should('have.text', 'Do Meta Tags Help with SEO');
    });

    it('5. No other meta tags other than title affect SEO rankings but...that is not to say they are unimportant!" items are present', () => {
        const information = [
            'Title: Very Important.',
            'Description: Less Important.',
            'Image: Moderately Important.',
            'Keyword: Negative Importance.'
        ];
        
        information.forEach((text) => {
          cy.get('p').should('contain.text', text);
        });
    });

    it('6. Test to check "How this API works" title is present', () => {
        cy.componentVisiblityCheck('article h4', 'How this API works').should('be.visible');
    });

    it('7. TO check the API response provides below information', () => {
        const information = [
            'Title tag value',
            'OpenGraph Meta Tags',
            'Favicon Image URL',
            'Canonical URL',
            'IP Address of the remote site, as resolved by DNS server',
            'HTML size of the remote document (in bytes)',
            'Fetch_duration: How many milliseconds did it take to fetch the page?',
            'Number of Scripts: How many JS documents are linkedin in the page',
            'Number of Stylesheets: How many CSS documents are linkedin in the page'
        ];
        information.forEach((Cases) => {
          cy.get('ul').should('contain.text', Cases);
        });
    });

    it('8. Test to check "Rotating Proxy Support" title is present', () => {
        cy.componentVisiblityCheck('article h4', 'Rotating Proxy Support').should('be.visible');
    });

    it('9. Test to check "Sample code" title is present', () => {
        cy.componentVisiblityCheck('article h4', 'Sample code').should('be.visible');
    });

  });