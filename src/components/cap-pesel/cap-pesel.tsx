import { Component, h, Listen, State, Prop, Method } from "@stencil/core";
import { ValidationHelper } from "./ValidationHelper";

@Component({
  tag: "cap-pesel",
  styleUrl: "./cap-pesel.scss",
  shadow: true
})
export class CapPesel {

  private peselInput: HTMLInputElement;

  @Prop()
  value: string;

  @Prop({ mutable: true, reflect: true })
  placeholder: string = "National ID";

  @State()
  isValid: boolean = true;

  @Listen("keyup")
  handleKeyDown() {
    this.isValid = true;
    this.value = this.peselInput.value;
  }

  @Method()
  validate() {
    this.isValid = ValidationHelper.validatePesel(this.peselInput.value);
    return Promise.resolve(this.isValid);
  }

  render() {

    let validationInfo = this.isValid ? "" : <p>Pesel może być nieprawidłowy</p>;

    return (
      <div id="pesel-container">
        <input
          id="pesel-input"
          type="text"
          placeholder={this.placeholder}
          ref={el => (this.peselInput = el)}
          value=""
        />
        <div id="pesel-input-border"><div id="error-message">{validationInfo}</div></div>
      </div>
    )
  }
}
