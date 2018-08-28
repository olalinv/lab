// Center PopUp
var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

var w = 70 * width / 100;
var h = 70 * height / 100;

var l = ((width / 2) - (w / 2));
var t = ((height / 2) - (h / 2));

var objeto_window_referencia;

console.log(width + "-" + height);
console.log(w + "-" + h);
console.log(l + "-" + t);
var configuracion_ventana = "width=" + w + ",height=" + h + ",left=" + l + ",top=" + t + ",toolbar=no,status=no,resizable=yes,scrollbars=yes";

function openPopup() {
  objeto_window_referencia = window.open(
    "lorem.html",
    "Mi página",
    configuracion_ventana
  );
  console.log(typeof objeto_window_referencia);
  console.log(objeto_window_referencia);
  // objeto_window_referencia.resizeTo(o, s);
  // objeto_window_referencia[objeto_window_referencia.addEventListener ? 'addEventListener' : 'attachEvent'](
  //   (objeto_window_referencia.attachEvent ? 'on' : '') + 'load', openPopup(), false
  // );
  objeto_window_referencia.addEventListener('load', loadPopup(), false);
  objeto_window_referencia.onbeforeunload = function() {
    closePopup();
  };
}

function resizePopup() {
  console.log(typeof objeto_window_referencia);
  console.log(objeto_window_referencia);
  objeto_window_referencia.resizeTo(500, 250);
}

function loadPopup() {
  console.log("Hello");
}

function closePopup() {
  console.log("Bye");
}

document.getElementById("trigger").addEventListener("click", function(event) {
  openPopup();
}, false);

document.getElementById("resizer").addEventListener("click", function(event) {
  resizePopup();
}, false);
