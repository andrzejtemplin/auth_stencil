import { Component, h, Prop, Listen, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'push-button',
  styleUrl: 'push-button.css',
  shadow: true
})
export class PushButton {

  @Prop({ mutable: true, reflect: true }) on: boolean = false;
  @Event() stateHasBeenChanged: EventEmitter;

  @Listen('click')
  changeState() {
    this.on = !this.on;
  }

  @Watch('on')
  onStateBeingChanged() {
    this.stateHasBeenChanged.emit(this.on);
  }

  render() {
    
    
    return <stencil-asset></stencil-asset>;
  }
}
