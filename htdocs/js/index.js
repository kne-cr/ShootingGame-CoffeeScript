var clear_context, context, main_screen, pressed;

pressed = new Array(240);

document.onkeydown = function(key) {
  return pressed[key.keyCode] = true;
};

document.onkeyup = function(key) {
  return pressed[key.keyCode] = false;
};

clear_context = function() {
  return context.clearRect(0, 0, main_screen.width, main_screen.height);
};

main_screen = $("#screen")[0];

context = main_screen.getContext("2d");

$("#start").click(function() {
  var main, player;
  main = function() {
    player.move();
    clear_context();
    player.draw();
    return setTimeout(main, 20);
  };
  $(this).attr("disabled", true);
  player = new Player(20);
  return main();
});
