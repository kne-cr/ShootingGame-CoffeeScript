$("#start").click(function() {
  var context, main, main_screen, player;
  $(this).attr("disabled", true);
  main_screen = $("#screen")[0];
  context = main_screen.getContext("2d");
  player = new Player(main_screen.width.center(), main_screen.height - 50, 20);
  document.onkeydown = function(key) {
    return player.instruct(key);
  };
  document.onkeyup = function(key) {
    return player.cancel(key);
  };
  main = function() {
    var bullet, i, len, ref;
    context.clearRect(0, 0, main_screen.width, main_screen.height);
    player.action();
    context.drawImage(player.image, player.position.x, player.position.y);
    ref = player.bullets;
    for (i = 0, len = ref.length; i < len; i++) {
      bullet = ref[i];
      bullet.move();
      context.fillStyle = "rgb(255, 255, 255)";
      context.fillRect(bullet.position.x, bullet.position.y, bullet.width, bullet.height);
    }
    return setTimeout(main, 20);
  };
  return main();
});
