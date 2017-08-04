/* global $ */
$(function () {
  $('#form1').submit(function (event) {
    event.preventDefault();
    console.log('Submitting');
    $.ajax({
      url: $(this).attr('action'),
      context: $(this)
    }).done(function () {
      console.log('Done!');
      $(this).addClass('success');
    }).fail(function (data) {
      console.log('Error!');
      $(this).addClass('error');
    }).always(function (data) {
      $('#test').html(data);
    });
  });
});
