import { Component, Prop, getAssetPath, h } from "@stencil/core";
@Component({
  tag: "cap-icon",
  assetsDirs: ["assets"]
})
export class CapIcon {
  @Prop() name = "eye-off-outline";

  render() {
    return <img src={getAssetPath(`./assets/${this.name}.svg`)} />;
  }
}
