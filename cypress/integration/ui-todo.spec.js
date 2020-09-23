const DEV_URL = "http://localhost:3000";

describe("CRUD flow - ui-todo", () => {
  before(() => {
    cy.visit(DEV_URL).wait(1000);
  });

  it("clean up", () => {
    cy.get('[data-cy=todo-task__button-delete]').click({ multiple: true });
  });
  

  it("should display header", () => {
    cy.get("[data-cy=header]").should("have.text", "TODO");
  });

  it("should be able to add todo", () => {
    cy.get("[data-cy=todo-input__input]").type("Buy Groceries");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Write TODO app");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Send masks to grandma");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Buy GroceriesWrite TODO appSend masks to grandma" //data added is stick tgt one
    );
  });

  it("should be able to delete todo", () => {
    //cy.get('[id^=btn]').click({ multiple: true }) to delete all
    cy.get("[data-cy=todo-task__button-delete]").eq(0).click(); //0 is based on array 0
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Write TODO appSend masks to grandma" //Remove the first item so check if firs time is gone
    );
  });
});
