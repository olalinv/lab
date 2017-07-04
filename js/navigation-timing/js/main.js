/* global performance */

window.addEventListener('load', function (event) {
  setTimeout(function () {
    var t = performance.timing;
    document.querySelector('#timing01').innerHTML += (t.loadEventEnd - t.responseEnd);
  }, 0);
});
