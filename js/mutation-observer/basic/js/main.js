/* global MutationObserver */

'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
  // Select the node that will be observed for mutations
  var target = document.getElementById('target');

  // Options for the observer (which mutations to observe)
  var config = {
    attributes: true,
    characterData: true,
    childList: true
  };

  // Callback function to execute when mutations are observed
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      console.log(mutation);
    });
  });

  // Start observing the target node for configured mutations
  observer.observe(target, config);

  // Later, you can stop observing
  // observer.disconnect();

  document.getElementById('add-elem').addEventListener('click', function (event) {
    addElem();
  }, false);

  document.getElementById('remove-elem').addEventListener('click', function (event) {
    removeElem();
  }, false);

});

function addElem () {
  var elem = document.createElement('div');
  elem.setAttribute('id', 'some-item');
  elem.textContent = 'Element added';
  var target = document.getElementById('target');
  target.appendChild(elem);
}

function removeElem () {
  var elem = document.getElementById('some-item');
  elem.parentNode.removeChild(elem);
}
