describe('Позитивный тест', function () {

    it('Верный логин и пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
       })
})
describe('Восстановить пароль', function () {

    it('Восстановить пароль по кнопке', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click(); // кнопка восстановить пароль
       cy.get('#mailForgot').type('german123@mail.ru');
       cy.get('#restoreEmailButton').should('be.visible'); 
       cy.get('#restoreEmailButton').rightclick();
       cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
       })
})
describe('Негативный кейс авторизации: логин', function () { // 4 тест

    it('Ввод неверного логина, верного пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('qwe@dolnv.ru'); // неверный логин
       cy.get('#pass').type('iLoveqastudio1') // верный пароль
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
}) 
describe('Негативный кейс авторизации: пароль', function () { // 3 тест

    it('Ввод верного логина, неверного пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru'); // верный логин
       cy.get('#pass').type('qastudio1') // неверный пароль
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
}) 
describe('Негативный кейс валидации', function () { // 5 тест

    it('Ввод логина без @, верного пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('germandolnikov.ru'); // логин без @
       cy.get('#pass').type('iLoveqastudio1') // верный пароль
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
}) 
describe('Приведение к строчным буквам', function () { // 6 тест

    it('Строчные буквы в логине', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru'); // логин с заглавными буквами
       cy.get('#pass').type('iLoveqastudio1') // верный пароль
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })
}) 
describe('Покупка аватара в покемонах', function () { // тест e2e по покемонам

    it('Новый аватар для тренера ', function () {
       cy.visit('https://pokemonbattle.me/');
       cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввод логина
       cy.get('#password').type('USER_PASSWORD');
       cy.get('.auth__button').click();
       cy.get('.header__btn_active').click(); // зашли в магазин
       cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get('.available > button').first().click();                  // кликаем по кнопке Купить у первого доступного аватара
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });
}) 