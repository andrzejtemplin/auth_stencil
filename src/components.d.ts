/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CapAuth {}
  interface CapButton {
    'color': 'primary' | 'secondary';
    'type': 'submit' | 'reset' | 'button';
  }
  interface CapIcon {
    'name': string;
  }
  interface CapPassword {
    'placeholder': string;
    'showPassword': boolean;
  }
  interface CapPesel {
    'placeholder': string;
  }
  interface CapPushButton {
    'on': boolean;
  }
}

declare global {


  interface HTMLCapAuthElement extends Components.CapAuth, HTMLStencilElement {}
  var HTMLCapAuthElement: {
    prototype: HTMLCapAuthElement;
    new (): HTMLCapAuthElement;
  };

  interface HTMLCapButtonElement extends Components.CapButton, HTMLStencilElement {}
  var HTMLCapButtonElement: {
    prototype: HTMLCapButtonElement;
    new (): HTMLCapButtonElement;
  };

  interface HTMLCapIconElement extends Components.CapIcon, HTMLStencilElement {}
  var HTMLCapIconElement: {
    prototype: HTMLCapIconElement;
    new (): HTMLCapIconElement;
  };

  interface HTMLCapPasswordElement extends Components.CapPassword, HTMLStencilElement {}
  var HTMLCapPasswordElement: {
    prototype: HTMLCapPasswordElement;
    new (): HTMLCapPasswordElement;
  };

  interface HTMLCapPeselElement extends Components.CapPesel, HTMLStencilElement {}
  var HTMLCapPeselElement: {
    prototype: HTMLCapPeselElement;
    new (): HTMLCapPeselElement;
  };

  interface HTMLCapPushButtonElement extends Components.CapPushButton, HTMLStencilElement {}
  var HTMLCapPushButtonElement: {
    prototype: HTMLCapPushButtonElement;
    new (): HTMLCapPushButtonElement;
  };
  interface HTMLElementTagNameMap {
    'cap-auth': HTMLCapAuthElement;
    'cap-button': HTMLCapButtonElement;
    'cap-icon': HTMLCapIconElement;
    'cap-password': HTMLCapPasswordElement;
    'cap-pesel': HTMLCapPeselElement;
    'cap-push-button': HTMLCapPushButtonElement;
  }
}

declare namespace LocalJSX {
  interface CapAuth {}
  interface CapButton {
    'color'?: 'primary' | 'secondary';
    'type'?: 'submit' | 'reset' | 'button';
  }
  interface CapIcon {
    'name'?: string;
  }
  interface CapPassword {
    'placeholder'?: string;
    'showPassword'?: boolean;
  }
  interface CapPesel {
    'placeholder'?: string;
  }
  interface CapPushButton {
    'on'?: boolean;
    'onPushButtonStateChange'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'cap-auth': CapAuth;
    'cap-button': CapButton;
    'cap-icon': CapIcon;
    'cap-password': CapPassword;
    'cap-pesel': CapPesel;
    'cap-push-button': CapPushButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'cap-auth': LocalJSX.CapAuth & JSXBase.HTMLAttributes<HTMLCapAuthElement>;
      'cap-button': LocalJSX.CapButton & JSXBase.HTMLAttributes<HTMLCapButtonElement>;
      'cap-icon': LocalJSX.CapIcon & JSXBase.HTMLAttributes<HTMLCapIconElement>;
      'cap-password': LocalJSX.CapPassword & JSXBase.HTMLAttributes<HTMLCapPasswordElement>;
      'cap-pesel': LocalJSX.CapPesel & JSXBase.HTMLAttributes<HTMLCapPeselElement>;
      'cap-push-button': LocalJSX.CapPushButton & JSXBase.HTMLAttributes<HTMLCapPushButtonElement>;
    }
  }
}


