$(document).ready(function () {
  $('.collapsible').collapsible({
    accordion: true
  });

  $('i.more').on('click', function (event) {
    event.stopPropagation();
    Materialize.toast('test', 2000);
  });
});
