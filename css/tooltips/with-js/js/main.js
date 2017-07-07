/* global $, event */
$(function () {
  var title;
  $('a[title], img[alt]').hover(
    function () {
      if ($(this).is('img')) {
        // Tags: img
        title = $(this).attr('alt');
        $(this).attr('alt', '');
      } else {
        // Tags: a, button, etc.
        title = $(this).attr('title');
        $(this).attr('title', '');
      }
      $(this).after('<span class="tooltip"></span>');
      $('.tooltip').css({
        top: (event.pageY > 30 ? event.pageY : event.pageY + 50),
        left: event.pageX
      });
      $('.tooltip').text(title);
      $('.tooltip').fadeIn('slow');
    },
    function () {
      $('.tooltip').fadeOut('slow');
      $('.tooltip').remove();
      if ($(this).is('img')) {
        // Tags: img
        $(this).attr('alt', title);
      } else {
        // Tags: a, button, etc.
        $(this).attr('title', title);
      }
    }
  );
});
