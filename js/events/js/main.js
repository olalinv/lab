// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOMContentLoaded');
});

// load
window.addEventListener('load', function (event) {
  console.log('load');
});

// beforeunload
window.onbeforeunload = function (event) {
  return 'Bye';
};

// window.addEventListener('beforeunload', function (event) {
//   var confirmationMessage = '\o/';
//   event.returnValue = confirmationMessage;
//   return confirmationMessage;
// });

// unload
window.addEventListener('unload', function (event) {
  console.log('unload');
});
