$(function() {
  var context, mainScreen;
  mainScreen = $("#screen")[0];
  context = mainScreen.getContext("2d");
  ContextAbility.giveTo(context);
  mainScreen.width = Setting.SCREEN.WIDTH;
  mainScreen.height = Setting.SCREEN.HEIGHT;
  return $("#start").click(function() {
    var enemies, main, player;
    $(this).attr("disabled", true);
    player = new Player;
    enemies = new Enemies;
    document.onkeydown = function(key) {
      return player.command.request(key.keyCode);
    };
    document.onkeyup = function(key) {
      return player.command.cancel(key.keyCode);
    };
    main = function() {
      var timer;
      enemies.apear();
      player.behave(enemies.list);
      enemies.behave(player);
      context.clear();
      context.drawImageOf(player);
      context.drawRectOfAlive(player.bullets.list);
      context.drawImageOfAlive(enemies.list);
      timer = setTimeout(main, Setting.INTERVAL);
      if (!player.isAlive) {
        return clearTimeout(timer);
      }
    };
    return main();
  });
});
