$("#start").click(function() {
  var bullets, context, main, main_screen, player;
  $(this).attr("disabled", true);
  main_screen = $("#screen")[0];
  context = main_screen.getContext("2d");
  player = new Player(main_screen.width, main_screen.height, 20);
  bullets = [];
  document.onkeydown = function(key) {
    return player.instruct(key);
  };
  document.onkeyup = function(key) {
    return player.cancel(key);
  };
  main = function() {
    player.move();
    context.clearRect(0, 0, main_screen.width, main_screen.height);
    context.drawImage(player.image, player.x, player.y);
    return setTimeout(main, 20);
  };
  return main();
});
