$("#start").click(function() {
  var context, enemies, main, main_screen, player;
  $(this).attr("disabled", true);
  main_screen = $("#screen")[0];
  context = main_screen.getContext("2d");
  ScreenAbility.give_to(main_screen);
  player = new Player(main_screen.width.center(), main_screen.height - 50, 20);
  enemies = new Enemies(main_screen.width, 5, 3);
  document.onkeydown = function(key) {
    return player.command.request(key.keyCode);
  };
  document.onkeyup = function(key) {
    return player.command.cancel(key.keyCode);
  };
  main = function() {
    var bullet, enemy, i, j, len, len1, ref, ref1;
    player.action();
    enemies.action();
    main_screen.clear_out_of_range(player.bullets.list);
    main_screen.clear_out_of_range(enemies.list);
    context.clearRect(0, 0, main_screen.width, main_screen.height);
    context.drawImage(player.image, player.position.x, player.position.y);
    ref = player.bullets.list;
    for (i = 0, len = ref.length; i < len; i++) {
      bullet = ref[i];
      if (!(!bullet.is_dead)) {
        continue;
      }
      context.fillStyle = bullet.style;
      context.fillRect(bullet.position.x, bullet.position.y, bullet.position.width, bullet.position.height);
    }
    ref1 = enemies.list;
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      enemy = ref1[j];
      if (!enemy.is_dead) {
        context.drawImage(enemy.image, enemy.position.x, enemy.position.y);
      }
    }
    return setTimeout(main, 20);
  };
  return main();
});
