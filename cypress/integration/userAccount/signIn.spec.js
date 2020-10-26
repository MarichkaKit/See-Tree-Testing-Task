import Home from '../../../src/pages/Home';

beforeEach(function () {
  cy.viewport(1280, 720)
})


describe('Sign In', () => {

  it('should show an error message on empty input', () => {
    const home = new Home();
    home.visit();

    const signIn = home.goToSignIn();

    signIn.submit();

    signIn.getSignInError()
      .should('exist')
      .contains('Incorrect username or password.');

  });

  it('should show an error message on incorrect password input', () => {
    const home = new Home();
    home.visit();

    const signIn = home.goToSignIn();

    signIn
      .fillEmail('seetree@mailforspam.com')
      .fillPassword('Seetree12341!')
      .submit();

    signIn.getSignInError()
      .should('exist')
      .contains('Incorrect username or password.');

  });

  it('should sign in with correct credentials(email)', () => {
    const home = new Home();
    home.visit();

    const signIn = home.goToSignIn();

    signIn
      .fillEmail('seetree@mailforspam.com')
      .fillPassword('Seetree1234!')
      .submit();

      signIn.getVerificationMessage()
      .should('exist')
      .contains('Please verify your email address');

    
  });

  it('should sign in with correct credentials(username)', () => {
    const home = new Home();
    home.visit();

    const signIn = home.goToSignIn();

    signIn
      .fillEmail('seetree1')
      .fillPassword('Seetree1234!')
      .submit();

 });

  

});