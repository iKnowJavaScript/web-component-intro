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

customElements.define("progress-bar", ProgressBar);
