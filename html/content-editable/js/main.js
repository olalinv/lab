document.addEventListener('DOMContentLoaded', function (event) {
  var el = document.querySelector('[contenteditable]');
  el.addEventListener('click', function (event) {
    el.setAttribute('contenteditable', 'true');
  });
  el.addEventListener('blur', function (event) {
    el.setAttribute('contenteditable', 'false');
  });
});
