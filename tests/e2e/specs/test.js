// https://docs.cypress.io/api/introduction/api.html

describe('Testing my App', () => {
  // afterEach(() => {
  //   cy.get(':nth-child(6) > .v-btn__content').click();
  // });

  const logout = () => {
    cy.get(':nth-child(6) > .v-btn__content').click();
  };

  it.only('Login', () => {
    cy.visit('/');
    cy.get('[href="/administrador"] > .v-btn__content').click();
    cy.contains('Mi Cuenta');

    cy.get('#email').type('admin@admin.com');
    cy.get('#password').type('123456');
    cy.get('form').submit();

    cy.contains('Dashboard');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/dashboard');
    });

    logout();
  });

  it.only('Crear', () => {
    const email = 'empresa02@yopmail.com';
    const pass = '123456';

    cy.visit('/');
    cy.get('[href="/administrador"] > .v-btn__content').click();
    cy.contains('Mi Cuenta');

    cy.get('#crearcuenta').click();

    cy.get('#email').type(email);
    cy.get('#password').type(pass);
    cy.get('form').submit();

    cy.contains('Dashboard');
    cy.contains(email);
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/dashboard');
    });
  });
});
