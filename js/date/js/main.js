
document.addEventListener('DOMContentLoaded', function (event) {
  checkDate('9/12/1980');
  checkDate('9/13/1980');
});

function checkDate(dt) {
  var parts = dt.split('/');
  let isValidDate = Date.parse(parts[1] + '/' + parts[0] + '/' + parts[2]);

  if (isNaN(isValidDate)) {
    console.log('Invalid date');
    return false;
  } else {
    console.log('Valid date');
  }
}
