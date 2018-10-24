
document.addEventListener('DOMContentLoaded', function () {
  let button = document.getElementById('button');
  button.addEventListener('click', compareDates, false);
});

function compareDates () {
  let d1 = document.getElementById('date1').value;
  let d2 = document.getElementById('date2').value;
  if (d1 && d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    if (date1.getTime() > date2.getTime()) {
      console.log('d1 is > than d2');
      return false;
    } else {
      console.log('d1 is <= than d2');
      return true;
    }
  } else {
    console.log('It doesn´t mind');
  }
}
