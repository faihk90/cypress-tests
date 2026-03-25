/// <reference types="cypress" />

Cypress.Commands.add("scanMissingDataTest", () => {
  cy.document().then((doc) => {
    const actionable = Array.from(
      doc.querySelectorAll<HTMLElement>('button, [role="button"], a[href], input, select, textarea')
    );

    const missing = actionable.filter((el) => !el.hasAttribute("data-test"));

    Cypress.log({
      name: "scan",
      message: `Missing data-test: ${missing.length} elements`,
    });

    // Show one example in DevTools console
    // eslint-disable-next-line no-console
    console.log("Example missing element:", missing[0]?.outerHTML);

    return cy.wrap(missing, { log: false });
  });
});

Cypress.Commands.add("aiSuggestFor", { prevSubject: "element" }, ($el) => {
  const el = $el.get(0);
  const fallback = "btn.unknown";

  cy.task("aiName", { html: el?.outerHTML || "", fallback }, { log: false }).then((name: any) => {
    Cypress.log({
      name: "AI",
      message: `Suggested data-test: ${String(name)}`,
    });
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      scanMissingDataTest(): Chainable<HTMLElement[]>;
      aiSuggestFor(): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};