import { Component, h, Prop, Watch } from "@stencil/core";

@Component({
  tag: "cap-password",
  styleUrl: "./cap-password.css",
  shadow: true
})
export class CapPassword {
  @Prop()
  label: string;

  @Prop({ mutable: true, reflectToAttr: true })
  showPassword: boolean;

  togglePassword: HTMLInputElement;
  passwordInput: HTMLInputElement;

componentDidLoad() {
  this.togglePasswordVisibility();
}

  @Watch('showPassword')
  togglePasswordVisibility() {
    if (this.togglePassword.checked) {
      this.passwordInput.setAttribute("type", "text");
      this.showPassword = true;
    } else {
      this.passwordInput.setAttribute("type", "password");
      this.showPassword = false;
    }
  }

  render() {
    return [
      <div id="password">
        <input id="password-input" type="password" placeholder={this.label || "Password "} ref={el => (this.passwordInput = el)} />
        <push-button>sdfsf</push-button>
        <input
          id="checkbox"
          type="checkbox"
          checked={this.showPassword}
          ref={el => (this.togglePassword = el)}
          onClick={this.togglePasswordVisibility.bind(this)}
        />
      </div>
    ];
  }
}
