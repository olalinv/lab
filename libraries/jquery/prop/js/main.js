/* global $ */
$(function () {
  /** Select all checkboxes. */
  $('#select-all').change(function () { // 'select all' change
    $('.check-all').prop('checked', $(this).prop('checked')); // change all '.checkbox' checked status
  });

  // '.check-all' change
  $('.check-all').change(function () {
    // uncheck 'select all', if one of the listed checkbox item is unchecked
    if (false == $(this).prop('checked')) { // if this item is unchecked
      $('#select-all').prop('checked', false); // change 'select all' checked status to false
    }
    // check 'select all' if all checkbox items are checked
    if ($('.check-all:checked').length == $('.check-all').length) {
      $('#select-all').prop('checked', true);
    }
  });
});
