import { Component, h, Listen, State, Prop } from "@stencil/core";
import { ValidationHelper } from "./ValidationHelper";

@Component({
  tag: "cap-pesel",
  styleUrl: "./cap-pesel.scss",
  shadow: true
})
export class CapPesel {
  peselInput: HTMLInputElement;

  @State()
  isValid: boolean = true;

  @Prop()
  label: string;

  @Listen("keyup")
  handleKeyDown() {
    if (this.peselInput.value.length === 11) {
      console.log("osiągnąłem 11 znaków");
      this.isValid = ValidationHelper.validatePesel(this.peselInput.value);
    } else if (this.peselInput.value.length >= 11) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  render() {

    let validationInfo = this.isValid ? "" : <p>Pesel może być nieprawidłowy</p>;

    return (
    <div id="pesel-container">
      <input
        id="pesel-input"
        type="text"
        placeholder={this.label || "PESEL"}
        ref={el => (this.peselInput = el)}
      />
      <div id="pesel-input-border"></div>
      <div id="error-message">{validationInfo}</div>
    </div>
    )
  }
}
