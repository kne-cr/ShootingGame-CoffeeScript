$(function() {
  var context, enemies, main, mainScreen, player, start;
  mainScreen = $("#screen")[0];
  mainScreen.width = Setting.SCREEN.WIDTH;
  mainScreen.height = Setting.SCREEN.HEIGHT;
  player = new Player;
  enemies = new Enemies;
  context = mainScreen.getContext("2d");
  ContextAbility.giveTo(context);
  context.showCenter("PUSH START");
  document.onkeydown = function(event) {
    event.preventDefault();
    return player.command.request(event.keyCode);
  };
  document.onkeyup = function(event) {
    event.preventDefault();
    return player.command.cancel(event.keyCode);
  };
  start = function() {
    player.reset();
    enemies.reset();
    return main();
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
    context.showUpperLeft("SCORE : " + (enemies.totalEXP()));
    timer = setTimeout(main, Setting.INTERVAL);
    if (!player.isAlive) {
      clearTimeout(timer);
      alert("GAME OVER : " + (enemies.totalEXP()));
      return start();
    }
  };
  return $("#start").click(function() {
    $(this).attr("disabled", true);
    return start();
  });
});
