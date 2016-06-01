$(document).ready(function() {
  $("button#meow").click(function() {
    $("img").show();
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Growl!</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#bark").click(function() {
    $("img").show();
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Hiss!</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

});
