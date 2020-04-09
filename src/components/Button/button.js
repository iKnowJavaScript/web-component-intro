import { LitElement, html, css } from "lit-element";

export class Button extends LitElement {
  static get properties() {
    return {
      title: { type: Number },
      button_click: { type: Function },
    };
  }

  static get styles() {
    return css`
      .btn {
        color: gray;
        background: var(--main-btn-bg, green);
        color: var(--main-btn-color, white);
        margin: 0.5rem auto;
        display: flex;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        padding: 0.5em 1em;
        border: solid 1px transparent;
        border-radius: 4px;
        outline: 0;
      }

      .btn:hover {
        background: var(--main-btn-color, white);
        color: var(--main-btn-bg, green);
        border: solid 1px var(--main-btn-bg, green);
      }
    `;
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
