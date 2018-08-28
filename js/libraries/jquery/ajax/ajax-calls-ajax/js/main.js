$(function() {

  $("#trigger").click(function() {

    $.ajax({
      url: "test.html",
      context: document.body
    }).done(function(data) {
      $(this).addClass("done");
      $(this).append(data);
      console.log("done");
    }).fail(function() {
      console.log("fail");
    });

  });

});
