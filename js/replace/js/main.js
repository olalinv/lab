// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
  var content = document.getElementById('table').innerHTML.replace(/(\t|\r|\n)/g, '').replace(/\[0\]/g, '[17]');
  console.log(content);
});
