import {
  Component,
  h,
  Prop,
  Watch,
  Listen,
  Method,
  EventEmitter,
  Event
} from "@stencil/core";

@Component({
  tag: "cap-password",
  styleUrl: "./cap-password.scss",
  shadow: true
})
export class CapPassword {
  private passwordInput: HTMLInputElement;

  @Prop({mutable:true,reflectToAttr:true})
  value: string;

  @Prop()
  pattern: string;

  @Prop({ mutable: true, reflect: true })
  placeholder: string = "Password";

  @Prop({ mutable: true, reflect: true })
  showPassword: boolean;

  @Prop({ mutable: true, reflect: true })
  isValid: boolean = false;

  @Event() inputValueChange: EventEmitter;
  valueChangeHandler(ev: any) {
    this.value = ev.target.value;   
    this.isValid = !this.passwordInput.validity.patternMismatch;
    this.inputValueChange.emit(ev);
  }

  @Listen("pushButtonStateChange")
  pushButtonStateChangeHandler(event: CustomEvent) {
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

  @Method()
  validate() {
    this.isValid = !this.passwordInput.validity.patternMismatch;
    return Promise.resolve(this.isValid);
  }

  render() {
    return [
      <div id="password-container">
        <input
          id="password-input"
          type="password"
          placeholder={this.placeholder}
          ref={el => (this.passwordInput = el)}
          onInput={ev => this.valueChangeHandler(ev)}
          pattern={this.pattern}
          value=""
        />
        <div id="password-input-border"></div>
        <cap-push-button
          id="show-password-button"
          on={this.showPassword}
        ></cap-push-button>
      </div>
    ];
  }
}
