import { POSITIONSTACK_BASE_URL } from '../../resources/data';

describe('Postionstack Documentation page', () => {
    before(() => {
        cy.visit(POSITIONSTACK_BASE_URL);
    });

    it('1. Test to click on the "Documentation" hyperlink and naviagate to the "Documentation" page', () => {
        cy.AcceptCookies();
        cy.get('.header > .container > ul > :nth-child(2) > a').click();
        cy.assertPathname('/documentation');
    });

    it('2. Test to check the text "API Documentation" is present', () => {
        cy.AcceptCookies();
        cy.componentVisiblityCheck(':nth-child(1) > h2', 'API Documentation');
    });

    it('3. Test to check the text "Getting Started" is present', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .doc_heading', 'Getting Started');
    });

    it('4. Test to navigate to "API Access Key" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(1) > :nth-child(2) > a', 'API Access Key');
        cy.get('.menu > :nth-child(1) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#access_keys > h3', 'API Access Key');
    });

    it('5. Test to navigate to "HTTPS Encryption" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(1) > :nth-child(3) > a', 'HTTPS Encryption');
        cy.get('.menu > :nth-child(1) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#https > h3', '256-bit HTTPS Encryption');
    });

    it('6. Test to navigate to "JSONP Callbacks" section', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(4) > a', 'JSONP Callbacks');
        cy.get(':nth-child(1) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#jsonp_callbacks > h3', 'JSONP Callbacks');
    });

    it('7. Test to navigate to "API Errors" section', () => {
        cy.componentVisiblityCheck(':nth-child(1) > :nth-child(5) > a', 'API Errors');
        cy.get(':nth-child(1) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#api_errors > h3', 'API Errors');
    });

    it('8. Test to navigate to "Forward Geocoding" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(2) > a', 'Forward Geocoding');
        cy.get('.menu > :nth-child(2) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#forward_geocoding > h3', 'Forward Geocoding');
    });

    it('9. Test to navigate to "Reverse Geocoding" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(3) > a', 'Reverse Geocoding');
        cy.get('.menu > :nth-child(2) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#reverse_geocoding > h3', 'Reverse Geocoding');
    });

    it('10. Test to navigate to "Batch Requests" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(2) > :nth-child(4) > a', 'Batch Requests');
        cy.get('.menu > :nth-child(2) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#batch_requests > h3', 'Batch Requests');
    });

    it('11. Test to navigate "Embeddable Maps" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(2) > a', 'Embeddable Maps');
        cy.get('.menu > :nth-child(3) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#embeddable_maps > h3', 'Embeddable Maps');
    });

    it('12. Test to navigate to "Country Module" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(3) > a', 'Country Module');
        cy.get('.menu > :nth-child(3) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck('#country_module > h3', 'Country Module');
    });

    it('13. Test to navigate to "Sun Module" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(4) > a', 'Sun Module');
        cy.get('.menu > :nth-child(3) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#sun_module > h3', 'Sun Module');
    });

    it('14. Test to navigate to "Timezone Module" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(5) > a', 'Timezone Module');
        cy.get('.menu > :nth-child(3) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#timezone_module > h3', 'Timezone Module');
    });

    it('15. Test to navigate to "Bounding Box Module" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(3) > :nth-child(6) > a', 'Bounding Box Module');
        cy.get('.menu > :nth-child(3) > :nth-child(6) > a').click();
        cy.componentVisiblityCheck('#bbox_module > h3', 'Bounding Box Module');
    });

    it('16. Test to navigate to "Specify Response Fields" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(2) > a', 'Specify Response Fields');
        cy.get('.menu > :nth-child(3) > :nth-child(6) > a').click();
        cy.componentVisiblityCheck('#specify_fields > h3', 'Specify Response Fields');
    });

    it('17. Test to navigate to "Specify Output format" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(4) > :nth-child(3) > a', 'Specify Output Format');
        cy.get('.menu > :nth-child(3) > :nth-child(6) > a').click();
        cy.componentVisiblityCheck('#output_format > h3', 'Specify Output Format');
    });

    it('18. Test to navigate to "PHP" section', () => {
        cy.get('.menu > :nth-child(5) > :nth-child(2) > a').scrollIntoView();
        cy.componentVisiblityCheck('.menu > :nth-child(5) > :nth-child(2) > a', 'PHP');
        cy.get('.menu > :nth-child(4) > :nth-child(2) > a').click();
        cy.get('#php > h3').scrollIntoView();
        cy.componentVisiblityCheck('#php > h3', 'PHP');
    });

    it('19. Test to navigate to "Python" section', () => {
        cy.get('.menu > :nth-child(5) > :nth-child(3) > a').scrollIntoView();
        cy.componentVisiblityCheck('.menu > :nth-child(5) > :nth-child(3) > a', 'Python');
        cy.get('.menu > :nth-child(5) > :nth-child(3) > a').click();
        cy.get('#python > h3').scrollIntoView();
        cy.componentVisiblityCheck('#python > h3', 'Code Example - Python');
    });

    it('20. Test to navigate to "Nodejs" section', () => {
        cy.componentVisiblityCheck(':nth-child(5) > :nth-child(4) > a', 'Nodejs');
        cy.get(':nth-child(5) > :nth-child(4) > a').click();
        cy.componentVisiblityCheck('#nodejs > h3', 'Code Example - Nodejs');
    });

    it('21. Test to navigate to "jQuery" section', () => {
        cy.componentVisiblityCheck(':nth-child(5) > :nth-child(5) > a', 'jQuery');
        cy.get(':nth-child(5) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#jquery > h3', 'Code Example - jQuery');
    });

    it('22. Test to navigate to "GO" section', () => {
        cy.componentVisiblityCheck(':nth-child(5) > :nth-child(6) > a', 'Go');
        cy.get(':nth-child(5) > :nth-child(5) > a').click();
        cy.componentVisiblityCheck('#go > h3', 'Code Example - Go');
    });

    it('23. Test to navigate to "Ruby" section', () => {
        cy.componentVisiblityCheck(':nth-child(5) > :nth-child(7) > a', 'Ruby');
        cy.get(':nth-child(5) > :nth-child(7) > a').click();
        cy.componentVisiblityCheck('#ruby > h3', 'Code Example - Ruby');
    });

    it('24. Test to navigate to "Billing Overages" section', () => {
        cy.componentVisiblityCheck('.menu > :nth-child(6) > :nth-child(2) > a', 'Billing Overages')
        cy.get('.menu > :nth-child(5) > :nth-child(2) > a').click();
        cy.componentVisiblityCheck('#billing-overages', 'Business Continuity - API Overages')
    });

    it('25. Test to navigate to "Platinum Support" section', () => {
        cy.componentVisiblityCheck(':nth-child(6) > :nth-child(3) > a', 'Platinum Support');
        cy.get(':nth-child(6) > :nth-child(3) > a').click();
        cy.componentVisiblityCheck(':nth-child(22) > :nth-child(22)', 'What does Platinum Support include?');
    });

    it('26. Test to check "Upgrade Now" button is present', () => {
        cy.componentVisiblityCheck('.platinum-btn');
        cy.get('.platinum-btn').click();
        cy.go('back');
    });
});