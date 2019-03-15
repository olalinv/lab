'use strict';

// Template
const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./js/w/w-button.css">
  <div class="w-button"></div>
`;

// Class
export class WButton extends HTMLElement {

  static get observedAttributes() {
    return ['title'];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
    this.buttonElement.innerHTML = this._title;
  }

  constructor() {
    super();

    // Template
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));

    // Elements
    this.buttonElement = this.root.querySelector('.w-button');

    // Events
    this.root.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('someEvent', {
        detail: 'someValue'
      }));
    })
  }

  // Attributes
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'title' & oldValue !== newValue) {
      this.title = newValue;
    }
  }

}

customElements.define('w-button', WButton);