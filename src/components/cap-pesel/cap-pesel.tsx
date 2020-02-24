import { Component, h, Listen, State, Prop } from "@stencil/core";
import { ValidationHelper } from "./ValidationHelper";

@Component({
  tag: "cap-pesel",
  styleUrl: "./cap-pesel.css",
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
    let validationInfo;

    if (!this.isValid) {
      validationInfo = <p>Pesel może być nieprawidłowy</p>;
    }

    return [
      <div>{this.label || "Wprowadź dane:"}</div>,
      <input type="text" id="pesel" ref={el => (this.peselInput = el)} />,
      <div id="error-message">{validationInfo}</div>
    ];
  }
}
