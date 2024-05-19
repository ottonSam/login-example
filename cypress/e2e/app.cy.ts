describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("happy path", () => {
    cy.get("img").should("be.visible");
    cy.get("input[id=email]").type(Cypress.env("EMAIL"));
    cy.get("input[id=password]").type(Cypress.env("PASSWORD"));
    cy.get("button[type=submit]").click();
    cy.url().should("eq", "http://localhost:5173/");
    cy.get("h6").should("contain.text", "Profile picture");
    cy.get("h2").should("contain.text", "Logout").click();
    cy.url().should("eq", "http://localhost:5173/login");
  });

  it("unhappy path", () => {
    cy.get("img").should("be.visible");
    cy.get("button[type=submit]").click();
    cy.get("p").should("contain.text", "Required");
    cy.get("input[id=email]").type("example@gmail.com");
    cy.get("input[id=password]").type("password");
    cy.get("button[type=submit]").click();
    cy.get("p").should("contain.text", "Email e/ou senha incorreto(s).");
  });
});
