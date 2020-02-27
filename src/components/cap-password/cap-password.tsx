import { Component, h, Prop, Watch, Listen } from "@stencil/core";

@Component({
  tag: "cap-password",
  styleUrl: "./cap-password.scss",
  shadow: true
})
export class CapPassword {
  @Prop({reflect:true})
  placeholder: string;

  @Prop({ mutable: true, reflectToAttr: true })
  showPassword: boolean;
  
  private passwordInput: HTMLInputElement;

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
          placeholder={this.placeholder || "Password "}
          ref={el => (this.passwordInput = el)}
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
