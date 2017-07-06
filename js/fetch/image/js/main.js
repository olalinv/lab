/* global fetch, URL */
document.addEventListener('DOMContentLoaded', function (event) {
  var image = document.createElement('img');
  var article = document.querySelector('article');
  article.appendChild(image);

  fetch('img/flowers.jpg')
  .then(function (response) {
    if (!response.ok) return new Error(response);
    return response.blob();
  })
  .then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    image.src = objectURL;
  })
  .catch(function (err) {
    console.log(err);
  });
});
