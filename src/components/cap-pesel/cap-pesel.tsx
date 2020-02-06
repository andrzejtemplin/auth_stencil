import { Component, Element, Listen } from '@stencil/core';

@Component({
  tag: 'cap-pesel',
  styleUrl: './cap-pesel.css',
  shadow: true
})
export class CapPesel {
  @Element()
  el: HTMLElement;

  peselInput: HTMLInputElement;

  @Listen('keyup')
  handleKeyDown() {

      console.log(this.peselInput.value);

  }


  validatePesel(event: Event) {
    event.preventDefault();
    console.log("test");
  }

  render() {
    return (
      <form onSubmit={this.validatePesel.bind(this)}>
        <input
          type="text"
          ref={el => (this.peselInput = el)}
          id="pesel"
        />
        <button type="submit">Wyślij</button>
      </form>
    )

  }
}