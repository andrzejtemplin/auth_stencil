import { Component, h } from "@stencil/core";

@Component({
  tag: "cap-auth",
  styleUrl: "cap-auth.scss",
  shadow: true
})
export class CapAuth {
  formControls = {
    pesel: {
      value: String,
      isValid: Boolean
    },
    password: {
      value: String,
      isValid: Boolean
    }
  };

  async formSubmitHandler(event: Event) {
    event.preventDefault();
    console.log(this.formControls);
  }

  changeFormValue(controlName, customEvent) {
    console.log(customEvent.target.value, customEvent.target.isValid);

    this.formControls = {
      ...this.formControls,
      [controlName]: {
        value: customEvent.target.value,
        isValid: customEvent.target.isValid
      }
    };

    console.log(this.formControls);
  }

  render() {
    return (
      <div id="auth-container">
        <form
          name="authForm"
          onSubmit={e => this.formSubmitHandler(e)}
          method="post"
        >
          <cap-pesel
            onInputValueChange={value => this.changeFormValue("pesel", value)}
          ></cap-pesel>
          <cap-password
            onInputValueChange={value =>
              this.changeFormValue("password", value)
            }
            pattern="^.{4,8}$"
          ></cap-password>
          <a href="">Password reset</a>
          <div>
            <cap-button type="submit" color="primary">
              Sign in
            </cap-button>
            <cap-button color="secondary">Sign up</cap-button>
          </div>
        </form>
      </div>
    );
  }
}
