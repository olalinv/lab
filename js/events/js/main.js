// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOMContentLoaded');
});

// load
window.addEventListener('load', function (event) {
  console.log('load');
});

// beforeunload
window.addEventListener('beforeunload', function (event) {
  console.log('beforeunload');
});

// unload
window.addEventListener('unload', function (event) {
  console.log('unload');
});
