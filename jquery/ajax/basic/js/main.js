/* global $ */
$(function () {
  $('#trigger').click(function () {
    $.ajax({
      url: 'test.html',
      context: $('#test')
    }).done(function (data) {
      console.log('done');
      $(this).addClass('done');
      $(this).html(data);
    }).fail(function () {
      console.log('fail');
    });
  });
});
