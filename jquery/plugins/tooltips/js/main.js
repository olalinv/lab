/* global $ */
$(function () {
  var title, pageY, pageX;
  $('a[title], img[alt]').hover(
    function (event) {
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
      pageY = event.pageY;
      pageX = event.pageX;
      $('.tooltip').css({
        top: pageY > 30 ? pageY : pageY + 50,
        left: pageX
      });
      $('.tooltip').text(title);
      $('.tooltip').fadeIn('slow');
    },
    function (event) {
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
