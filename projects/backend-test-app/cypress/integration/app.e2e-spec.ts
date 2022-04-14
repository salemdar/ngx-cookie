const objectCookieValue = '{\n' +
  '  "myKey": "myValue"\n' +
  '}';

describe('workspace-project backend-test-app', () => {

  xit('should set and get cookies', () => {
    cy.visit('/');
    cy.get('#cookieValue').should('have.text', 'myValue');
    cy.get('#objectCookieValue').should('have.text', objectCookieValue);
    cy.get('#hasCookieTrue').should('have.text', 'true');
    cy.get('#hasCookieFalse').should('have.text', 'false');
  });

});
