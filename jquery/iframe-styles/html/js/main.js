/* global $ */
$(function () {
  $('iframe').contents().find('body').css({
    'background-color': 'yellow'
  });
});
