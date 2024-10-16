import { VAULT_API_BASE_URL } from '../../resources/data';

describe('Vault API info page', () => {
    before(() => {
      cy.visit(VAULT_API_BASE_URL);
    });

    it('1. Test to "Accept Cookies" if not already accepted', () => {
        cy.AcceptCookies();
    });   

    it('2. Test to check "Vault API" title is present', () => {
        cy.componentVisiblityCheck('.h2', 'Vault API');
    });

    it('3. Test to click "Api Info" tab', () => {
        cy.get('#details-tab > .d-md-flex > span').click();
        cy.checkTextVisibility('Vault API provides an application backend for:');
    
    });

    it('4. Check if the "Vault API Code Sample image" is present and loaded', () => {
        cy.get('article img')
          .should('have.attr', 'src', 'https://assets.apilayer.com/apis/codes/vault/vault.png') 
          .and('be.visible'); 

        cy.get('article img').should(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });

    it('5. check the Vault API provides an application backend for', () => {
        const encryptionFeatures = [
            'Encryption key generation, storage and management',
            'Content storage of any size (text only)',
            'Automated encryption of content',
            'Ability to use your own encryption keys (optional)',
            'Ability to browse the contents simulating an file sysem structure'
        ];
    
        encryptionFeatures.forEach((feature) => {
          cy.get('article > ul').should('contain.text', feature);
        });
    });
    

  });