import { BANK_DATA_BASE_URL } from '../../resources/data';

describe('Bank Data Blog page', () => {
    before(() => {
        cy.visit(BANK_DATA_BASE_URL);
    });

    it('1. click on the "Blog" menu item to navigate to that page', () => {
        cy.AcceptCookies();
        cy.get('.menu-item > a').contains('BLOG').click();
        cy.assertPathname('/blog/');
    });

    it('2. Test to check  "All the text" is present', () => {
        cy.checkTextVisibility('Jugá En Playuzu Un Casino Más Transparente De Argentin');
        cy.checkTextVisibility('Crypto Casino: Les Twelve Meilleurs Casinos Dos Crypto Et Bitcoin 202');
        cy.checkTextVisibility('10 Utländska Casino För Svenska Spelare: Leta Fram Bästa Spelupplevelsen Utomland');
        cy.checkTextVisibility('1win Casino Лучшие Онлайн Ставки На Спорт 1вин Казин');
        cy.checkTextVisibility('Mostbet On Line Casino En Iyi Çevrimiçi Slotları Ve Slot Makinelerini Oynayı');
        cy.checkTextVisibility('Casino Not On Gamstop » 120+ Non Gamstop Casinos Uk 202');
        cy.checkTextVisibility('Мостбет Mostbet Зеркало Рабочее И актуальное На Сегодня%2C проход На Официальный Сайт Мостбет Зеркал');
        cy.checkTextVisibility('“Top Ten Online Gambling Europe Sites For Genuine Money In 202');
        cy.checkTextVisibility('Ücretsiz Internet Casino Oyunlar');
        cy.checkTextVisibility('Aviato');
    });

});