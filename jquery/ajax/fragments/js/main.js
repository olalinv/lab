/* global $ */
$(function () {
  $('#trigger').click(function () {
    $.ajax({
      url: 'test.html',
      context: $('#test')
    }).done(function (data) {
      console.log(data);
      $(this).addClass('done');
      var dataFiltered = $('<div/>').html(data).find('h1');
      $(this).html(dataFiltered);
      console.log('done');
    }).fail(function () {
      console.log('fail');
    });
  });
});
