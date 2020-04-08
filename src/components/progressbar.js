class ProgressBar extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.createShadowRoot();
    this._progress = 0;
  }
