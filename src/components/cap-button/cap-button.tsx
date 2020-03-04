import {
  Component,
  h,
  Prop,
  Element,
  EventEmitter,
  Event
} from "@stencil/core";

@Component({
  tag: "cap-button",
  styleUrl: "cap-button.scss",
  shadow: true
})
export class CapButton {
  @Prop() type: "submit" | "reset" | "button" = "button";
  @Prop({ reflect: true }) color: "primary" | "secondary" = "primary";
  @Element() el!: HTMLElement;
  @Event() onClick: EventEmitter;

  clickEventHandler(ev: Event) {
    if (this.type === "submit") {
      const form = this.el.closest("form");
      if (form) {
        ev.preventDefault();

        const fakeButton = document.createElement("button");
        fakeButton.type = this.type;
        fakeButton.style.display = "none";
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
    this.onClick.emit(ev);
  }

  render() {
    return (
      <button onClick={this.clickEventHandler.bind(this)}>
        <slot />
      </button>
    );
  }
}
