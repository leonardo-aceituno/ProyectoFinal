// https://docs.cypress.io/api/introduction/api.html

describe('Testing my App', () => {
  const logout = () => {
    cy.get(':nth-child(6) > .v-btn__content').click();
  };

  it('Flujo Crear Cuenta', () => {
    cy.visit('/');
    cy.get('[href="/administrador"] > .v-btn__content').click();
    cy.contains('Mi Cuenta');

    cy.get('#crearcuenta').click();

    const email = 'empresa05@yopmail.com';
    const pass = '123456';

    cy.get('#email').type(email);
    cy.get('#password').type(pass);
    cy.get('form').submit();

    cy.contains('Dashboard');
    cy.contains(email);
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/dashboard');
    });

    cy.pause();
    // CREAR EMPRESA
    cy.get('#test_crearempresa').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/crearempresa');
    });

    // Nombre
    cy.get('#nombre').type('Importante Empresa');

    // Categoria
    cy.get('#categoria').type('Testing');

    // Region
    cy.get('#region').click();
    cy.get(
      '.v-menu__content > .v-list > .v-list-item .v-list-item__content > .v-list-item__title'
    )
      .contains('Atacama')
      .click();

    //  Descripcion
    cy.get('#descripcion').type(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et aliquam mi, in egestas nunc. '
    );

    // Comuna
    cy.get('#comuna').click();
    cy.get(
      '.v-menu__content > .v-list > .v-list-item .v-list-item__content > .v-list-item__title'
    )
      .contains('Caldera')
      .click();

    // Responsable
    cy.get('#responsable').type('DesafioLatam');

    // Email
    cy.get('#email').type('desafio@latam.com');
    // Telefono
    cy.get('#telefono').type('940010203');

    // Instagram
    cy.get('#instagram').type('@desafiolatam');

    // Facebook
    cy.get('#facebook').type('@Facebbo_desafiolatam');

    // twitter
    cy.get('#twitter').type('DesafioTuiter');

    // Web
    cy.get('#web').type('https://desafiolatam.com/');

    // imagen
    cy.get('#imagen').type(
      'https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png'
    );

    // Activar producto
    cy.get('.v-input--selection-controls__ripple').click();

    // boton Crear
    cy.get('#btn-crear').click();

    // --------> CERRAR SESION <------------
    logout();
  });

  // const loginAdmin = () => {
  //   cy.visit('/');
  //   cy.get('[href="/administrador"] > .v-btn__content').click();
  //   cy.contains('Mi Cuenta');

  //   cy.get('#email').type('admin@admin.com');
  //   cy.get('#password').type('123456');
  //   cy.get('form').submit();

  //   cy.contains('Dashboard');
  //   cy.location().should((loc) => {
  //     expect(loc.pathname).to.eq('/dashboard');
  //   });
  // };

  // it('Crear', () => {
  //   const email = 'empresa03@yopmail.com';
  //   const pass = '123456';

  //   cy.visit('/');
  //   cy.get('[href="/administrador"] > .v-btn__content').click();
  //   cy.contains('Mi Cuenta');

  //   cy.get('#crearcuenta').click();

  //   cy.get('#email').type(email);
  //   cy.get('#password').type(pass);
  //   cy.get('form').submit();

  //   cy.contains('Dashboard');
  //   cy.contains(email);
  //   cy.location().should((loc) => {
  //     expect(loc.pathname).to.eq('/dashboard');
  //   });
  // });
});
