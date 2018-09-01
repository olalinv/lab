
document.addEventListener('DOMContentLoaded', function (event) {
  if (typeof moment !== 'undefined') {
    moment.locale('es');
  }
  checkDate('9/12/1980');
  checkDate('9/13/1980');
});

function checkDate(dt) {
  let date = moment(dt, 'DD/MM/YYYY');
  if (date.isValid()) {
    console.log('Valid date');
  } else {
    console.log('Invalid date');
    return false;
  }
}
