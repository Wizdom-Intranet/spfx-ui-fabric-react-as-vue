/// <reference types="Cypress" />

context("Datepicker", () =>{
    beforeEach(()=>cy.visit("http://localhost:8080/docs/#datepicker"));

    it('Simple', () => {
        cy.get("Body").vrt("Datepicker - Simple - close");
        cy.get("input").click();
        cy.get("Body").vrt("Datepicker - Simple - expanded");
    });
});