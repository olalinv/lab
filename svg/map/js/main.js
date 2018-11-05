window.addEventListener('load', function () {
  var svgObject = document.getElementById('map-object').contentDocument;
  var areaCoruna = svgObject.getElementById('areaCoruna');
  var areaCorunaPath = svgObject.getElementById('areaCorunaPath');
  var areaLugo = svgObject.getElementById('areaLugo');
  var areaLugoPath = svgObject.getElementById('areaLugoPath');
  var areaOurense = svgObject.getElementById('areaOurense');
  var areaOurensePath = svgObject.getElementById('areaOurensePath');
  var areaPontevedra = svgObject.getElementById('areaPontevedra');
  var areaPontevedraPath = svgObject.getElementById('areaPontevedraPath');

  // Click
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

  // Mouseover
  areaCorunaPath.addEventListener('mouseenter', function (event) {
    this.style.fill = 'yellow';
  });
  areaCorunaPath.addEventListener('mouseleave', function (event) {
    this.style.fill = '#0000ff';
  });
  areaLugoPath.addEventListener('mouseenter', function (event) {
    this.style.fill = 'yellow';
  });
  areaLugoPath.addEventListener('mouseleave', function (event) {
    this.style.fill = '#0000ff';
  });
  areaOurensePath.addEventListener('mouseenter', function (event) {
    this.style.fill = 'yellow';
  });
  areaOurensePath.addEventListener('mouseleave', function (event) {
    this.style.fill = '#0000ff';
  });
  areaPontevedraPath.addEventListener('mouseenter', function (event) {
    this.style.fill = 'yellow';
  });
  areaPontevedraPath.addEventListener('mouseleave', function (event) {
    this.style.fill = '#0000ff';
  });
});

function sayHello (msg) {
  alert(msg);
}
