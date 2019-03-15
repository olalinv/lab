'use strict';

import './w/button/button.js';

const wButton = document.querySelector('w-button');
wButton.addEventListener('someEvent', (event) => {
  console.log(event);
  alert(`You´ve just launched a custom event called ${event.type} and it says: ${event.detail}`);
})