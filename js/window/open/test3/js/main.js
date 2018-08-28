document.getElementById("trigger").addEventListener("click", function(event) {
  makeNewWindow('lorem.html', 'Mi página');
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
  console.log(newWindow);
  newWindow.onload = function () {
    loadPopup();
  }
  var isClosed = setInterval(function () {
      if (newWindow.closed) {
        clearInterval(isClosed);
        closePopup();
      }
  }, 2000);

};

function loadPopup() {
  console.log("Hello");
}

function closePopup() {
  console.log("Bye");
}
