$(window).load(function() {
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
    enemies.behave(player);
    player.behave(enemies.list);
    context.clear();
    context.showUpperLeft("SCORE : " + (enemies.totalEXP()));
    context.drawImageOf(player);
    context.drawRectOfActive(player.bullets.list);
    context.drawImageOfActive(enemies.boss.bullets.list);
    context.drawImageOfActive(enemies.list);
    timer = setTimeout(main, Setting.INTERVAL);
    if (!player.isAlive()) {
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
