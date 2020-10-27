
import 'cypress-file-upload';

describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

 it("should open Sensifai Web Site", () => {
    cy.get(".header-logo").click();
    cy.go('back');
  });

  it("should have a possibility to open Customized Models API page", () => {
    cy.get(".header-links").click();
  });

  it("should have a possibility to open Current Models API page", () => {
    cy.get(".header-links").click();

  it("should have a possibility to select dropdown option", () => {
    cy.get(".select-input").click();
    cy.get('.select-item').contains("Face Detection").then (item1 => {
    cy.get('.select-item').contains("Celebrity Recognition").then (item2 => {
    expect(isVisible(item1[0])).to.be.true
      
  });

      item1.click();
    
  });

  it("should show error on empty file upload", () => {
    cy.get(".result-btn.btn.btn--full-width.btn--green").click();
    cy.get(".btn.btn--green.btn--md").click();
    cy.wait(500);
    cy.get(".input-error")
    .should('have.value','Please Enter Valid URL!');


  it("should upload file and see result", () => {
    cy.get(".result-btn.btn.btn--full-width.btn--green");
    const filePath = 'http://fcit.usf.edu/florida/photos/historic/dsmem/dsarmor/dsarmo2/photos/dsarmo232.jpg';
    cy.get(".input").attachFile(filePath);
    cy.get(".btn.btn--green.btn--md").click();
  });

  
})
})
})
})
