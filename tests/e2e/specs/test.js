// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get('[href="/administrador"] > .v-btn__content').click();
    cy.contains("Mi Cuenta");

    cy.get("#email").type("admin@admin.com");
    cy.get("#password").type("123456");
    cy.get("#iniciarsesion").submit();
    cy.contains("Dashboard");
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/dashboard");
    });
  });
});
