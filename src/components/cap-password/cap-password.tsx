import { Component, h, Prop, State, Watch, Listen, Method } from "@stencil/core";

@Component({
  tag: "cap-password",
  styleUrl: "./cap-password.scss",
  shadow: true
})
export class CapPassword {
  private passwordInput: HTMLInputElement;

  @Prop()
  value: string;

  @Prop({ mutable: true, reflect: true })
  placeholder: string = "Password";

  @Prop({ mutable: true, reflect: true })
  showPassword: boolean;

  @Prop()
  pattern: string;

  @State()
  isValid: boolean = true;

  @Listen('pushButtonStateChange')
  pushButtonStateChangeHandler(event: CustomEvent) {
    this.showPassword = event.detail;
  }

  @Listen('keyup')
  setValue() {
    this.value = this.passwordInput.value;
  }

  @Watch("showPassword")
  togglePasswordVisibility() {
    if (this.showPassword) {
      this.passwordInput.setAttribute("type", "text");
    } else {
      this.passwordInput.setAttribute("type", "password");
    }
  }

  @Method()
  validate() {
    this.isValid = true;
    return Promise.resolve(this.isValid);
  }


  render() {
    return [
      <div id="password-container" >
        <input
          id="password-input"
          type="password"
          placeholder={this.placeholder}
          ref={el => this.passwordInput = el}
          value=""
        />
        <div id="password-input-border"></div>
        <cap-push-button id="show-password-button"
          on={this.showPassword}
        ></cap-push-button>
      </div>
    ];
  }
}
