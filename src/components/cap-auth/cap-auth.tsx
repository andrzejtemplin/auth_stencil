import { Component, h, State } from "@stencil/core";

@Component({
  tag: "cap-auth",
  styleUrl: "cap-auth.scss",
  shadow: true
})
export class CapAuth {
 
  @State() formControls = {
    pesel: null,
    password: null
  };

  changeFormValue(controlName, value) {
    this.formControls = {
      ...this.formControls,
      [controlName]: value
    };
  }

  formSubmitHandler(event: Event) {
    event.preventDefault();
    console.log(this.formControls);
  }

  render() {
    return (
      <div id="auth-container">
        <form onSubmit={e => this.formSubmitHandler(e)}>
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
