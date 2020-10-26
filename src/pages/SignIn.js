
class SignIn {
  visit() {
    cy.visit('/login');
  }

  getSignInError() {
    return cy.get('.container-lg.px-2');
  }

  getVerificationMessage() {
    return cy.get('.mb-1');
  }


  fillEmail(value) {
    const field = cy.get('#login_field');
    field.clear();
    field.type(value);

    return this;
  }

  fillPassword(value) {
    const field = cy.get('#password');
    field.clear();
    field.type(value);

    return this;
  }

  submit() {
    const button = cy.get('.btn.btn-primary.btn-block');
    button.click();
  }

}

export default SignIn;
