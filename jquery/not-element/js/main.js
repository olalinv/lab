/* global $ */

$(function () {
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.panel').length) {
      console.log('Clicked on document');
    } else {
      console.log('Clicked on panel');
    }
  });
});
