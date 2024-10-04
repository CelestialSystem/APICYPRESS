import { IPSTACK_BASE_URL } from '../../resources/data';

describe('Pricing Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit(IPSTACK_BASE_URL);
    });

    it('1. Test to navigate to the "Pricing" page', () => {
        cy.AcceptCookies();
        cy.componentVisiblityCheck('.main-menu > :nth-child(1) > a');
        cy.get('.main-menu > :nth-child(1) > a').click();
        cy.assertPathname('/product');
    });

    it('2. Test to check the presence of "Pricing" text', () => {
        cy.checkTextVisibility('Pricing');
    });

    it('3. Test to check the presence of the toggle field', () => {
         cy.componentVisiblityCheck('.toggle');
    });

    it('4. Test to check the "Monthly" toggle field is present', () => {
        cy.componentVisiblityCheck('.toggle > :nth-child(1)');
    });

    it('5. Test to check the "Yearly" toggle field is present', () => {
        cy.componentVisiblityCheck('.toggle > :nth-child(2)');
    });

    it('6. Test to check the frequency changer toggle field is present', () => {
        cy.componentVisiblityCheck('.freq_changer');
    });

    it('7. Test to check text "Choose annual billing and save up to 15%."is present', () => {
        cy.checkTextVisibility('Choose annual billing and save up to 15%.');
    });

    it('9. Test to check the "Free" plan details', () => {
        cy.componentVisiblityCheck('.free > .heading > .price_title');
        cy.componentVisiblityCheck('.free > .heading > .price_title','FREE');
        cy.componentVisiblityCheck('.free > h3[data-type="price_yearly"]', '$0');
    });

    it('10. Test to check the "Basic" plan details', () => {
        cy.componentVisiblityCheck('.basic > .heading > .price_title', 'BASIC');
        cy.componentVisiblityCheck('.basic > h3[data-type="price_yearly"]', '$11.99');
    });

    it('11. Test to check the "Professional" plan details', () => {
        cy.componentVisiblityCheck('.heading > .price_title_professional', 'PROFESSIONAL');
        cy.componentVisiblityCheck('.professional > h3[data-type="price_yearly"]','$52.99');
    });

    it('12. Test to check the "Professional Plus" plan details', () => {
        cy.componentVisiblityCheck('.professional_plus > .heading > .price_title', 'PROFESSIONAL PLUS');
        cy.componentVisiblityCheck('.professional_plus > h3[data-type="price_yearly"]').should('contain.text', '$84.99');
    });

    it('13. Test to check the "Enterprise" plan details', () => {
        cy.componentVisiblityCheck('.enterprise > .heading > .price_title', 'ENTERPRISE');
        cy.componentVisiblityCheck('.enterprise > h3[data-type="price_yearly"]', 'Volume');
    });

    it('14.Test to check the "Free" plan "Features"', () => {
        cy.get('.free > .features').should('contain.text', '100 Requests / mo')
            .and('contain.text', 'No Support')
            .and('contain.text', 'Location Module')
            .and('contain.text', ' Encryption');
    });

    it('15.Test to check the "Features" in the "Basic" plan', () => {
        cy.get('.basic > .features').should('contain.text', '50,000 Requests / mo')
            .and('contain.text', 'Standard Support')
            .and('contain.text', 'Location Module')
            .and('contain.text', 'SSL Encryption')
            .and('contain.text', 'Currency Module')
            .and('contain.text', 'Time Zone Module')
            .and('contain.text', 'Connection Module');
    });

    it('16. Test to check the "Features" in the "Professional" plan', () => {
        cy.get('.professional > .features').should('contain.text', '500,000 Requests / mo')
            .and('contain.text', 'Standard Support')
            .and('contain.text', 'Location Module')
            .and('contain.text', 'SSL Encryption')
            .and('contain.text', 'Currency Module')
            .and('contain.text', 'Time Zone Module')
            .and('contain.text', 'Connection Module')
            .and('contain.text', 'Bulk Endpoint');
    });

    it('17. Test to check the "Features" in the "Professional Plus" plan', () => {
        cy.get('.professional_plus > .features').should('contain.text', '2,000,000 Requests / mo')
            .and('contain.text', 'Standard Support')
            .and('contain.text', 'Location Module')
            .and('contain.text', 'SSL Encryption')
            .and('contain.text', 'Currency Module')
            .and('contain.text', 'Time Zone Module')
            .and('contain.text', 'Connection Module')
            .and('contain.text', 'Bulk Endpoint')
            .and('contain.text', 'Security Module');
    });

    it('18. Test to check the "Features" in the "Enterprise" plan', () => {
        cy.get('.enterprise > .features').should('contain.text', 'Any requests volume you need')
            .and('contain.text', 'Location Module')
            .and('contain.text', 'SSL Encryption')
            .and('contain.text', 'Currency Module')
            .and('contain.text', 'Time Zone Module')
            .and('contain.text', 'Connection Module')
            .and('contain.text', 'Bulk Endpoint')
            .and('contain.text', 'Security Module')
            .and('contain.text', 'Custom Solutions');
    });

    it('19. Test to toggle the subscription button to "Monthly"', () => {
        cy.get('.freq_changer').click();
    });

    it('20.Test to chek the "Free" plan for monthly', () => {
        cy.get('.free > .heading > .price_title').should('be.visible', 'contain.text', 'FREE');
        cy.get('.free > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', '$0');
    });

    it('21.Test to chek the "Basic" plan for monthly', () => {
        cy.get('.basic > .heading > .price_title').should('be.visible', 'contain.text', 'BASIC');
        cy.get('.basic > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', '$12.99');
    });

    it('22.Test to chek the "Professional" plan for monthly' , () => {
        cy.get('.heading > .price_title_professional').should('be.visible', 'contain.text', 'PROFESSIONAL');
        cy.get('.professional > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', '$59.99');
    });

    it('23.Test to chek the "Proffesional Plus" plan for monthly ', () => {
        cy.get('.professional_plus > .heading > .price_title').should('be.visible', 'contain.text', 'PROFESSIONAL PLUS');
        cy.get('.professional_plus > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', '$99.99');
    });

    it('24.Test to chek the Enterprice plan for monthly', () => {
        cy.get('.enterprise > .heading > .price_title').should('be.visible', 'contain.text', 'ENTERPRISE');
        cy.get('.enterprise > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', 'Volume');
    });

    it('25.Test to check "Platinum Support!" button is there', () => {
        cy.componentVisiblityCheck('.platinum_right_section > div','FIND OUT MORE');
    });

    it('26.Test to check "Platinum Support" button click', () => {
        cy.get('.platinum_right_section > div').should('be.visible').click();
        cy.visit(`${IPSTACK_BASE_URL}/documentation#support-section`);
        cy.go('back');
        cy.navigateUrlwithCookies(IPSTACK_BASE_URL);
    });

    it('27. Test to check "Get free API key" button', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('.free > .button').scrollIntoView();
        cy.componentVisiblityCheck('.free > .button','Get free API Key');
        cy.get('.free > .button').click();
        cy.assertPathname('/signup/free');
        cy.go('back');
    });
    
    it('28. Test to check the Basic plan "SIGN UP" button', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('.basic > .button').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.assertPathname('/signup/basic');
        cy.go('back');
    });
    
    it('29. Test to check the Professional plan "SIGN UP" button', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('.professional > .button').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.assertPathname('/signup/pro');
        cy.go('back');
    });
    
    it('30. Test to check the Professional Plus plan "SIGN UP" button', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('.professional_plus > .button').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.assertPathname('/signup/proplus');
        cy.go('back');
    });

    it('31. Test to check the Enterprise plan "SIGN UP" button', () => {
        cy.document().should((doc) => {
            expect(doc.readyState).to.equal('complete');
        });
        cy.get('.enterprise > .button').should('be.visible', 'contain.text', 'CONTACT US').click();
        cy.go('back');
    });
});