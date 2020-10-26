import Header from './Header';
import SignIn from './SignIn';


class Home {
  constructor() {
    this.header = new Header();
  }

  visit() {
    cy.visit('/');
  }

  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const signIn = new SignIn();
    return signIn;
  }

}

export default Home;