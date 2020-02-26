import { Component, h } from "@stencil/core";

@Component({
  tag: "cap-button",
  styleUrl: "cap-button.scss",
  shadow: true
})
export class CapButton {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
