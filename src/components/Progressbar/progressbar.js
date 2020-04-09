import { LitElement, html } from "lit-element";
import { style } from "./progressbarStyles";
import "../Button/button";

class ProgressBar extends LitElement {
  static get properties() {
    return { progress: { type: Number } };
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();

    this.progress = 0;
  }


  attributeChangedCallback(prop, previousValue, newValue) {
    const innerBar = this.shadowRoot.querySelector(".progress-bar-inner");

    switch (prop) {
      case "progress":
        this.progress = +newValue | 0;

        if (innerBar) {
          innerBar.style.width = this.progress + "%";
        }
    }
  }
  handleButtonLoader() {
    console.log("Button was clicked");

    if (this.progress < 99) return;
    this.runProgression();
  }

  render() {
    return html`
      <div class="progress-bar">
        <div class="progress-bar-inner">${this.progress}%</div>
      </div>
      <custom-button
        title=${this.progress < 99 ? "Loading..." : "Click to reload"}
        .button_click=${this.handleButtonLoader.bind(this)}
      ></custom-button>
    `;
  }
}

customElements.define("progress-bar", ProgressBar);
