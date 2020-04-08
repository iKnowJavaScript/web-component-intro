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

  attributeChangedCallback(name, previousValue, newValue) {
    const innerBar = this.shadow.querySelector(".progress-bar-inner");

    switch (name) {
      case "progress":
        this._progress = +newValue | 0;

        innerBar.style.width = this.complete + "%";
        innerBar.innerHTML = this.complete + "%";
    }
  }

  connectedCallback() {
    var template = `
      <style>
        .progress-bar {
          width: 50%;
          height: 30px;
          background-color: #EDF2F4;
          border-radius: 5px;
          color: #FFF;
        }
        .progress-bar-inner {
          height: 100%;
          line-height: 30px;
          background: #2B2D42;
          text-align: center;
          border-radius: 5px;
          transition: width 0.25s;
        }
      </style>
      <div class="progress-bar">
        <div class="progress-bar-inner">${this.complete}%</div>
      </div>
    `;

    this.shadow.innerHTML = template;
  }
}
