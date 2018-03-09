'use strict';
import Unsplash, { toJson } from 'unsplash-js';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const DEBUG_MODE = false; // Logs: set to true to enable debugging
if (typeof (console) === 'undefined') {
  console = {}
}
if (!DEBUG_MODE || typeof (console.log) === 'undefined') {
  console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function () {};
}

let unsplash = new Unsplash({
  applicationId: 'd132c7b851d6b15291ab5df5e13b30b36c7ec99eb476148ba7cacaac53ebdcdb',
  secret: '74da3a98195311b4064c1e2750b5574ef848bbd737a8dd2e59ff45c3eb43b889',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
});

// onDOMReady
document.addEventListener('DOMContentLoaded', load, false);

function load () {
  console.log('DOM Ready');
  let btnSearchApi = document.getElementById('btnSearchApi');
  btnSearchApi.addEventListener('click', searchApi, false);
}

function searchApi () {
  let keywords = document.getElementById('txtSearchApi').value;
  unsplash.search.photos(keywords, 1, 40)
    .then(toJson)
    .then(json => {
      console.log(json);
      json.results.forEach(function (item) {
        addImage(item.urls.thumb, item.id);
      });
    });
}

function addImage (url, id) {
  let gallery = document.querySelector('.gallery');
  let item = document.createElement('a');
  let img = document.createElement('img');
  item.setAttribute('class', 'item');
  item.addEventListener('click', function () {
    loadFullImage(id);
  }, false);
  img.setAttribute('src', url);
  item.appendChild(img);
  gallery.appendChild(item);
}

function loadFullImage (id) {
  unsplash.photos.getPhoto(id, 1920, 1080, [0, 0, 1920, 1080])
    .then(toJson)
    .then(json => {
      console.log(json);
      let overlay = document.createElement('div');
      overlay.setAttribute('class', 'overlay');
      let spinner = document.createElement('div');
      spinner.setAttribute('class', 'spinner');
      let img = document.createElement('img');
      img.setAttribute('src', json.urls.full);
      let btnClose = document.createElement('span');
      btnClose.setAttribute('class', 'btn-close');
      btnClose.addEventListener('click', function () {
        deleteItem('.overlay');
      }, false);
      overlay.appendChild(spinner);
      overlay.appendChild(img);
      overlay.appendChild(btnClose);
      document.querySelector('body').appendChild(overlay);
    });
}

function deleteItem (item) {
  document.querySelector(item).remove();
}
