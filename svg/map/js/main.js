window.addEventListener('load', function () {
  var svgObject = document.getElementById('map-object').contentDocument;
  var areaCoruna = svgObject.getElementById('areaCoruna');
  var areaLugo = svgObject.getElementById('areaLugo');
  var areaOurense = svgObject.getElementById('areaOurense');
  var areaPontevedra = svgObject.getElementById('areaPontevedra');
  areaCoruna.addEventListener('click', function (event) {
    event.preventDefault();
    sayHello('A Coruña');
  });
  areaLugo.addEventListener('click', function (event) {
    event.preventDefault();
    sayHello('Lugo');
  });
  areaOurense.addEventListener('click', function (event) {
    event.preventDefault();
    sayHello('Ourense');
  });
  areaPontevedra.addEventListener('click', function (event) {
    event.preventDefault();
    sayHello('Pontevedra');
  });
});

function sayHello (msg) {
  alert(msg);
}
