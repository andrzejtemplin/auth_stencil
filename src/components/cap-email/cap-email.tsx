import { Component, h, Prop, Method, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: "cap-email",
  styleUrl: "./cap-email.scss",
  shadow: true
})
export class CapEmail {
  @Prop({ mutable: true, reflectToAttr: true })
  value: string;

  @Prop({ mutable: true, reflect: true })
  placeholder: string = "National ID";

  @Prop({ mutable: true, reflectToAttr: true })
  isValid: boolean = false;

  @Event() inputValueChange: EventEmitter;
  valueChangeHandler(ev: any) {
    this.value = ev.target.value;
    this.inputValueChange.emit(ev);
  }

  @Method()
  validate() {
    return Promise.resolve(this.isValid);
  }

  render() {
    return (
      <div id="email-container">
        <input
          id="email-input"
          type="email"
          placeholder={this.placeholder}
          // ref={el => (this.emailInput = el)}
          onInput={ev => this.valueChangeHandler(ev)}
          value={this.value}
        />
        <div id="email-input-border"></div>
      </div>
    );
  }
}
