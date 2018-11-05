/* global MutationObserver */

'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
  // Select the node that will be observed for mutations
  var target = document.body;

  // Options for the observer (which mutations to observe)
  var config = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  };

  // Callback function to execute when mutations are observed
  var observer = new MutationObserver(function (mutations) {
    // console.log(mutations);
    mutations.forEach(function (mutation) {
      // console.log(mutation);
      mutation.addedNodes.forEach(function (node) {
        node.querySelectorAll('.some-child-item').forEach(function (item) {
          console.log(item.id);
        });
      });
    });
  });

  // Start observing the target node for configured mutations
  observer.observe(target, config);

  // Later, you can stop observing
  // observer.disconnect();

  document.getElementById('add-elem').addEventListener('click', function (event) {
    addElem(Math.random().toString(36).substr(2, 5));
  }, false);

});

function addElem (id) {
  // Child
  var elem = document.createElement('div');
  elem.setAttribute('class', 'some-item');
  elem.setAttribute('id', id);
  elem.textContent = 'Element added';
  var target = document.getElementById('target');
  target.appendChild(elem);
  // Subchild
  var subElem = document.createElement('div');
  subElem.setAttribute('class', 'some-child-item');
  subElem.setAttribute('id', 'child' + id);
  subElem.textContent = 'Subelement added';
  var subTarget = document.getElementById(id);
  subTarget.appendChild(subElem);
}
