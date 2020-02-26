import { Component, h, Prop, Watch, Listen } from "@stencil/core";

@Component({
  tag: "cap-password",
  styleUrl: "./cap-password.scss",
  shadow: true
})
export class CapPassword {
  @Prop()
  label: string;

  @Prop({ mutable: true, reflectToAttr: true })
  showPassword: boolean;
  
  passwordInput: HTMLInputElement;

  @Listen('pushButtonStateChange')
  pushButtonStateChangeHandler(event:CustomEvent) {
    this.showPassword = event.detail;
  }

  @Watch("showPassword")
  togglePasswordVisibility() {
    if (this.showPassword) {
      this.passwordInput.setAttribute("type", "text");
    } else {
      this.passwordInput.setAttribute("type", "password");
    }
  }

  render() {
    return [
      <div id="password-container" >
        <input
          id="password-input"
          type="password"
          placeholder={this.label || "Password "}
          ref={el => (this.passwordInput = el)}
        />
        <div id="password-input-border"></div>
        <cap-push-button id="show-password-button"
          on={this.showPassword}
        ></cap-push-button>
      </div>
    ];
  }
}
