var KEY, Player, clear_context, context, init_screen, main_screen, pressed;

Number.prototype.center = function() {
  return this / 2;
};

KEY = {
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

pressed = new Array(240);

document.onkeydown = function(key) {
  return pressed[key.keyCode] = true;
};

document.onkeyup = function(key) {
  return pressed[key.keyCode] = false;
};

Player = (function() {
  function Player(speed) {
    this.speed = speed;
    this.image = new Image();
    this.image.src = "img/player.png";
    this.x = main_screen.width.center() - this.image.width.center();
    this.y = main_screen.height - this.image.height - 20;
  }

  Player.prototype.left = function() {
    return this.x -= this.speed;
  };

  Player.prototype.right = function() {
    return this.x += this.speed;
  };

  Player.prototype.up = function() {
    return this.y -= this.speed;
  };

  Player.prototype.down = function() {
    return this.y += this.speed;
  };

  Player.prototype.draw = function() {
    return context.drawImage(this.image, this.x, this.y);
  };

  return Player;

})();

init_screen = function() {
  main_screen.width = 800;
  return main_screen.height = 500;
};

clear_context = function() {
  return context.clearRect(0, 0, main_screen.width, main_screen.height);
};

main_screen = $("#screen")[0];

context = main_screen.getContext("2d");

$(function() {
  return init_screen();
});

$("#start").click(function() {
  var main, player;
  main = function() {
    if (pressed[KEY.SPACE]) {

    } else if (pressed[KEY.LEFT]) {
      player.left();
    } else if (pressed[KEY.UP]) {
      player.up();
    } else if (pressed[KEY.RIGHT]) {
      player.right();
    } else if (pressed[KEY.DOWN]) {
      player.down();
    }
    clear_context();
    player.draw();
    return setTimeout(main, 20);
  };
  $(this).attr("disabled", true);
  player = new Player(20);
  return main();
});
