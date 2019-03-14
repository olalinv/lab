'use strict';

const template = document.createElement('template');
template.innerHTML = `
  <a class="btn">
    <slot></slot>
  </a>
`;

export class WButton extends HTMLElement {
  constructor() {
    super();
    // Template
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    // Content
    this.buttonText = this.root.querySelector('slot');
    console.log(this.buttonText);
  }
}

customElements.define('w-button', WButton);