import { Component } from "@stencil/core";

@Component({
  tag: "cap-auth",
  styleUrl: "cap-auth.css",
  shadow: true
})
export class CapAuth {
  
  login() {

  }
    render() {
    return [
      <form onSubmit={this.login}>
        <cap-pesel></cap-pesel>
        <cap-password></cap-password>  
      </form>,
      <button type="submit">Zaloguj</button>
    ];
  }
}
