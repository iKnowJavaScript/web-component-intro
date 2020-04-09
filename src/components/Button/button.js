import { LitElement, html, css } from "lit-element";

export class Button extends LitElement {
  static get properties() {
    return {
      title: { type: Number },
      button_click: { type: Function },
    };
  }


  constructor() {
    super();

    this.title = "Click";
  }

  attributeChangedCallback(prop, previousValue, newValue) {
    switch (prop) {
      case "title":
        this.title = newValue;
        break;

      default:
        return;
    }
  }

  render() {
    return html`<button class="btn btn-submit" @click=${this.button_click}>
      ${this.title}
    </button>`;
  }
}

customElements.define("custom-button", Button);
