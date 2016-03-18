$(function() {
  var context, enemies, mainScreen, player;
  mainScreen = $("#screen")[0];
  mainScreen.width = Setting.SCREEN.WIDTH;
  mainScreen.height = Setting.SCREEN.HEIGHT;
  context = mainScreen.getContext("2d");
  ContextAbility.giveTo(context);
  context.show("PUSH START");
  player = new Player;
  enemies = new Enemies;
  return $("#start").click(function() {
    var main;
    $(this).attr("disabled", true);
    player.reset();
    enemies.reset();
    document.onkeydown = function(event) {
      event.preventDefault();
      return player.command.request(event.keyCode);
    };
    document.onkeyup = function(event) {
      event.preventDefault();
      return player.command.cancel(event.keyCode);
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
        clearTimeout(timer);
        alert("GAME OVER");
        player.reset();
        enemies.reset();
        return main();
      }
    };
    return main();
  });
});
