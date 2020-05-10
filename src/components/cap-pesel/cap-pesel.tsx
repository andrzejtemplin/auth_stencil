import { Component, h, Prop, Method, EventEmitter, Event } from "@stencil/core";
import { validatePesel } from "./ValidationHelper";

@Component({
  tag: "cap-pesel",
  styleUrl: "./cap-pesel.scss",
  shadow: true
})
export class CapPesel {
  private peselInput: HTMLInputElement;

  @Prop({ mutable: true, reflectToAttr: true })
  value: string;

  @Prop({ mutable: true, reflect: true })
  placeholder: string = "National ID";

  @Prop({ mutable: true, reflectToAttr: true })
  isValid: boolean = false;

  @Event() inputValueChange: EventEmitter;
  valueChangeHandler(ev: any) {
    this.value = ev.target.value;
    this.isValid = validatePesel(this.value);
    this.inputValueChange.emit(ev);
  }

  @Method()
  validate() {
    this.isValid = validatePesel(this.peselInput.value);
    return Promise.resolve(this.isValid);
  }

  render() {
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
        <div id="pesel-input-border"></div>
      </div>
    );
  }
}
