import { Component, h } from "@stencil/core";

@Component({
  tag: "cap-auth",
  styleUrl: "cap-auth.scss",
  shadow: true
})
export class CapAuth {

  formSubmitHandler(event: Event) {
    event.preventDefault();
    const pesel = (event.target as HTMLElement).querySelector('cap-pesel');
    const password = (event.target as HTMLElement).querySelector('cap-password');

    Promise.all([pesel.validate(), password.validate()]).then(results => {
      if (results.reduce((x, y) => x && y)) {
        console.log('wszystko gra');
      }
      else {
        console.log('validation failed');
      }
    })
  }

  render() {
    return (
      <div id="auth-container">
        <form name="authForm" onSubmit={e => this.formSubmitHandler(e)} method="post">
          <cap-pesel></cap-pesel>
          <cap-password></cap-password>
          <a href="">Przypomnij hasło</a>
          <div>
            <cap-button type="submit" color="primary">
              Zaloguj się
            </cap-button>
            <cap-button color="secondary">Załóż konto</cap-button>
          </div>
        </form>
      </div>
    );
  }
}
