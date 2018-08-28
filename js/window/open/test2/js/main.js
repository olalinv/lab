document.getElementById("trigger").addEventListener("click", function(event) {
  makeNewWindow('lorem.html', 'Mi página');
}, false);

document.getElementById("resizer").addEventListener("click", function(event) {
  resizePopup();
}, false);

var makeNewWindow = function makeNewWindow (url, name) {
  // console.log('Opening new window:' + url);
  // Position
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
  // Browser size
  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  // Window size
  var w = 70 * width / 100;
  var h = 70 * height / 100;

  var left = ((width / 2) - (w / 2));
  var top = ((height / 2) - (h / 2));

  // Configuración
  var configuration = 'width=' + w + ',height=' + h + ',left=' + left + ',top=' + top + ',toolbar=no,status=no,resizable=yes,scrollbars=yes';
  var newWindow = window.open(url, name, configuration);
  // console.log(newWindow.status);
  newWindow.addEventListener(
    'load',
    (function () {
      loadPopup();
      newWindow.onbeforeunload = function () {
        setTimeout(closePopup, 1000);
      }
    })(),
    false);
};

function loadPopup() {
  console.log("Hello");
}

function closePopup() {
  console.log("Bye");
}
