import { Component, h, State, Prop, Method, EventEmitter, Event } from "@stencil/core";
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

  @Event() inputValueChange: EventEmitter;
  valueChangeHandler(ev: any) {
    this.inputValueChange.emit(ev.target.value);
  }

  @Method()
  validate() {
    this.isValid = ValidationHelper.validatePesel(this.peselInput.value);
    return Promise.resolve(this.isValid);
  }

  render() {
    let validationInfo = this.isValid ? (
      ""
    ) : (
      <p>Pesel może być nieprawidłowy</p>
    );

    return (
      <div id="pesel-container">
        <input
          id="pesel-input"
          type="text"
          placeholder={this.placeholder}
          ref={el => (this.peselInput = el)}
          onInput={ev => this.valueChangeHandler(ev)}
          value={this.value}
        />
        <div id="pesel-input-border">
          <div id="error-message">{validationInfo}</div>
        </div>
      </div>
    );
  }
}
