const objectCookieValue = '{\n' +
  '  "myKey": "myValue"\n' +
  '}';

describe('workspace-project test-app', () => {
  it('should set and get cookies', () => {
    cy.visit('/');
    cy.get('#setCookieButton').click();
    cy.get('#getCookieButton').click();
    cy.get('#cookieValue').should('have.text', 'myValue');
    cy.get('#objectCookieValue').should('have.text', objectCookieValue);
    cy.get('#hasCookieTrue').should('have.text', 'true');
    cy.get('#hasCookieFalse').should('have.text', 'false');
  });
});
