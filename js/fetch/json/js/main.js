/* global fetch */
document.addEventListener('DOMContentLoaded', function (event) {
  var list = document.createElement('ul');
  var article = document.querySelector('article');
  article.appendChild(list);

  fetch('json/products.json')
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    for (var i = 0; i < json.products.length; i++) {
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>' + json.products[i].Name + '</strong>';
      listItem.innerHTML += ' can be found in ' + json.products[i].Location + '.';
      listItem.innerHTML += ' Cost: <strong>£' + json.products[i].Price + '</strong>';
      list.appendChild(listItem);
    }
  });
});
