// <reference types="Cypress" />

context('First Page Load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3050/');
  });

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.host).to.eq('localhost:3050');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:3050');
      expect(location.pathname).to.eq('/');
      expect(location.port).to.eq('3050');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.be.empty;
    });
  });

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'http://localhost:3050/');
  });
});
