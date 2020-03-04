import { Component, h } from "@stencil/core";

@Component({
  tag: "cap-auth",
  styleUrl: "cap-auth.scss",
  shadow: true
})
export class CapAuth {
  formControls = {
    pesel: String,
    password: String
  };

  async formSubmitHandler(event: Event) {
    event.preventDefault();


    // Promise.all([pesel.validate(), password.validate()]).then(results => {
    //   if (results.reduce((x, y) => x && y)) {
    //     console.log("wszystko gra");
    //   } else {
    //     console.log("validation failed");
    //   }
    // });
    console.log(this.formControls);
  }

  changeFormValue(controlName, customEvent ) {  
    console.log(customEvent.target.value,customEvent.target.isValid );
    
    
    this.formControls = {
      ...this.formControls,
      [controlName]: customEvent.detail
      }      
      
      
  }

  render() {
    console.log("render");
    return (
      <div id="auth-container">
        <form
          name="authForm"
          onSubmit={e => this.formSubmitHandler(e)}
          method="post"
        >
          <cap-pesel
            onInputValueChange={(value) =>
              this.changeFormValue("pesel", value)
            }
          ></cap-pesel>
          <cap-password
            onInputValueChange={(value) =>
              this.changeFormValue("password", value)
            }
            pattern="^.{4,8}$"
          ></cap-password>
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
