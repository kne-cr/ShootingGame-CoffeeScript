$("#start").click(function() {
  var context, enemies, main, main_screen, player;
  $(this).attr("disabled", true);
  main_screen = $("#screen")[0];
  context = main_screen.getContext("2d");
  ScreenAbility.give_to(main_screen);
  ContextAbility.give_to(context);
  player = new Player(main_screen.width.center(), main_screen.height - 50, 20);
  enemies = new Enemies(main_screen.width, 5, 3);
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
    main_screen.clear_out_of_range([player.bullets.list, enemies.list]);
    context.clearRect(0, 0, main_screen.width, main_screen.height);
    context.draw_image_of_alive([player]);
    context.draw_rect_of_alive(player.bullets.list);
    context.draw_image_of_alive(enemies.list);
    return setTimeout(main, 20);
  };
  return main();
});
