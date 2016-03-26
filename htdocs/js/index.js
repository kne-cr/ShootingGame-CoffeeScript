$(window).load(function() {
  var clear, command, context, enemies, gameOver, main, mainScreen, player, start, timer;
  mainScreen = $("#screen")[0];
  mainScreen.width = Setting.SCREEN.WIDTH;
  mainScreen.height = Setting.SCREEN.HEIGHT;
  context = mainScreen.getContext("2d");
  ContextAbility.giveTo(context);
  context.showCenter("PRESS ENTER");
  command = new Command;
  player = new Player(command);
  enemies = new Enemies;
  timer = 0;
  document.onkeydown = function(event) {
    command.request(event.keyCode);
    if (command.isRequested(Command.ENTER)) {
      return start();
    }
  };
  document.onkeyup = function(event) {
    return command.cancel(event.keyCode);
  };
  start = function() {
    clearTimeout(timer);
    player.reset();
    enemies.reset();
    return main();
  };
  gameOver = function() {
    clearTimeout(timer);
    alert("GAME OVER : " + (enemies.totalEXP()));
    return start();
  };
  clear = function() {
    clearTimeout(timer);
    return context.showCenter("CLEAR！！");
  };
  return main = function() {
    enemies.apear();
    enemies.behave(player);
    player.behave(enemies.list);
    context.clear();
    context.showUpperLeft("SCORE : " + (enemies.totalEXP()));
    context.drawImageOf(player);
    context.drawRectOfActive(player.bullets.list);
    context.drawImageOfActive(enemies.list);
    timer = setTimeout(main, Setting.INTERVAL);
    if (!player.isAlive()) {
      gameOver();
    }
    if (enemies.boss.isKilled()) {
      return clear();
    }
  };
});
