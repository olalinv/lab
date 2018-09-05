/* global $ */
$(function () {
  $('#trigger').click(function () {
    // Option 1
    window.location = 'test.zip';
    // Option 2
    // ajaxDownload('test.zip', {}, '');
  });
});

// creates iframe and form in it with hidden field,
// then submit form with provided data
// url - form url
// data - data to form field
// input_name - form hidden input name
// example: ajax_download('/download.action', {'para1': 1, 'para2': 2}, 'dataname');

function ajaxDownload (url, data, inputName) {
  var $iframe,
    iframeDoc,
    iframeHtml;

  if (($iframe = $('#download_iframe')).length === 0) {
    $iframe = $('<iframe id="download_iframe"' + ' style="display: none" src="about:blank"></iframe>').appendTo('body');
  }

  iframeDoc = $iframe[0].contentWindow || $iframe[0].contentDocument;
  if (iframeDoc.document) {
    iframeDoc = iframeDoc.document;
  }

  iframeHtml = '<html><head></head><body><form method="GET" action="' + url + '">' + '<input type="hidden" name="' + inputName + '" value="' + JSON.stringify(data) + '"/></form></body></html>';

  iframeDoc.open();
  iframeDoc.write(iframeHtml);
  $(iframeDoc).find('form').submit();
}
