'use strict';

// Template
const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./js/w/w-button.css">
  <div class="w-button">
    <span class="w-button-icon"></span>
    <span class="w-button-text"></span>
  </div>
`;

// Class
export class WButton extends HTMLElement {

  static get observedAttributes() {
    return ['icon', 'title'];
  }

  get icon() {
    return this._icon;
  }

  set icon(value) {
    this._icon = value;
    this.buttonIconElement.innerHTML = this._icon;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
    this.buttonTextElement.innerHTML = this._title;
  }

  constructor() {
    super();

    // Template
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));

    // Elements
    this.buttonIconElement = this.root.querySelector('.w-button-icon');
    this.buttonTextElement = this.root.querySelector('.w-button-text');

    // Events
    this.root.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('someEvent', {
        detail: 'someValue'
      }));
    })
  }

  // Attributes
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'icon' & oldValue !== newValue) {
      this.icon = newValue;
    }
    if (attrName === 'title' & oldValue !== newValue) {
      this.title = newValue;
    }
  }

}

customElements.define('w-button', WButton);