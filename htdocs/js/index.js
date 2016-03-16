$(function() {
  var context, main_screen;
  main_screen = $("#screen")[0];
  context = main_screen.getContext("2d");
  ContextAbility.give_to(context);
  main_screen.width = Settings.SCREEN.WIDTH;
  main_screen.height = Settings.SCREEN.HEIGHT;
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
      enemies.apear();
      player.behave(enemies.list);
      enemies.behave(player);
      context.clear();
      context.draw_image_of_alive([player]);
      context.draw_rect_of_alive(player.bullets.list);
      context.draw_image_of_alive(enemies.list);
      return setTimeout(main, Settings.INTERVAL);
    };
    return main();
  });
});
