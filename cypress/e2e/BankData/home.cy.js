import { BANK_DATA_BASE_URL, APILAYER_BASE_URL } from '../../resources/data';

describe('Bank Data Home page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. Test to check if the text "High-class reliable IBAN and Swift Validation APIs" is present', () => {
        cy.AcceptCookies();
        cy.checkTextVisibility('High-class reliable IBAN and Swift Validation APIs');
    });
    
    it('2. Test to click & check "Free Sign up" button', () => {
        cy.get('.et_pb_button_module_wrapper > a').contains('FREE SIGN UP').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/marketplace/bank_data-api');
    });

    it('3. Test to check if the text "Compatible with over 1000 banks" is present', () => {
        cy.checkTextVisibility('Compatible with over 1000 banks');
    });
  
    it('4. Test to check if the text "Flexible integration, Real-Time Validation" is present', () => {
        cy.checkTextVisibility('Flexible integration, Real-Time Validation');
    });
   
    it('5. Test to check if the text "Cross-platform Compatibility" is present', () => {
        cy.checkTextVisibility('Cross-platform Compatibility');
    });
   
    it('6. Test to check if the text "Hi-Speed and Performance" is present', () => {
        cy.checkTextVisibility('Hi-Speed and Performance');
    });
   
    it('7. Test to check if the text "Up-to-the -seconds data', () => {
        cy.checkTextVisibility('Up-to-the -seconds data');
    });

    it('8. Test to click on the "LEARN MORE" button', () => {
        cy.get('.et_pb_button_module_wrapper > a').contains('LEARN MORE').click();
        cy.url().should('include', 'documentation');
        cy.go('back');
    });

    it('9. Test to check if the text "Get Accurate IBAN, SWIFT and BLZ Codes Data In Seconds" is present', () => {
        cy.checkTextVisibility('Get Accurate IBAN, SWIFT and BLZ Codes Data In Seconds');
    });

    it('10. Test to check if the text "Check IBAN in Seconds" is present', () => {
        cy.checkTextVisibility('Check IBAN in Seconds');
    });

    it('11. Test to check if the text "Search and Verify Swift codes" is present', () => {
        cy.checkTextVisibility('Search and Verify Swift codes');
    });

    it('12. Test to check if the text "Authenticate BLZ Codes" is present', () => {
        cy.checkTextVisibility('Authenticate BLZ Codes');
    });

    it('13. Test to check if the text "Check the US Routing Number" is present', () => {
        cy.checkTextVisibility('Check the US Routing Number');
    });

    it('14. Test to check if the text "Compare Pricing Plans" is present', () => {
        cy.checkTextVisibility('Compare Pricing Plans');
    });
    
    it('15. Test to check if the link with text "APILayer | Curated API Marketplace" is present', () => {
        // Click on the "APILayer | Curated API Marketplace" link
        cy.get('.et_pb_text_inner > a')
          .contains('APILayer | Curated API Marketplace')
          .click();
    
        cy.redirectToUrl(APILAYER_BASE_URL, '/');
    });
    
    it('16. Test to check if the text "Bank Data API: Get the financial facts fast" is present', () => {
        cy.checkTextVisibility('Bank Data API: Get the financial facts fast');
    });

    it('17. Test to check if the text "Join Our Global Community With Bank Data API" is present', () => {
        cy.checkTextVisibility('Join Our Global Community With Bank Data API');
    });
    
    it('18. Test to click & check "Get Bank Data API" button', () => {
        cy.get('.et_pb_button_module_wrapper > a').contains('Get Bank Data API').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/marketplace/bank_data-api');
    });
   
    it('19. Test to click & check "Join Now" button', () => {
        cy.get('.et_pb_button_module_wrapper > a').contains('Join Now').click();
        cy.redirectToUrl(APILAYER_BASE_URL, '/newsletter');
    });

});