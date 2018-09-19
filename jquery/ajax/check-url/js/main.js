/* global $ */
$(function () {
  $('#trigger').click(function (event) {
    event.preventDefault();
    let url = 'test.zip';
    checkUrl(url).then(function (data, textStatus, jqXHR) {
      // console.log(data, textStatus, jqXHR);
      // console.log(xhr.getAllResponseHeaders());
      let status = jqXHR.status;
      let contentType = jqXHR.getResponseHeader('Content-Type');
      if (status === 200 && contentType === 'application/zip') {
        redirect(url);
      }
    }, function () {
      console.log('fail');
    });
    // if (checkUrl(url)) {
    //   redirect(url);
    // }
  });
});

/**
 * checkUrl
 *
 * @param {string}
 *          url - The URL to check
 */
function checkUrl (url) {
  // Function implemented with promises
  return $.when($.ajax({
    type: 'HEAD',
    url: url
  }));
  // Function implemented with async
  // var isUrlChecked;
  // $.ajax({
  //   type: 'HEAD',
  //   async: false,
  //   url: url
  // }).done(function (data, status, xhr) {
  //   // console.log(xhr);
  //   // console.log(xhr.getAllResponseHeaders());
  //   let xhrStatus = xhr.status;
  //   let xhrContentType = xhr.getResponseHeader('Content-Type');
  //   if (xhrStatus === 200 && xhrContentType === 'application/zip') {
  //     isUrlChecked = true;
  //   }
  // });
  // return isUrlChecked;
}

/**
 * redirect
 *
 * @param {string}
 *          url - The URL to redirect
 */
function redirect (url) {
  window.location = url;
}
