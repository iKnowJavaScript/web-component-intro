class ProgressBar extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.createShadowRoot();
    this._progress = 0;
  }

  get progress() {
    return this._progress;
  }

  set progress(value) {
    this.setAttribute("progress", value);
  }

  static get observedAttributes() {
    return ["progress"];
  }

