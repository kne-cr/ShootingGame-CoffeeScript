var KEY, Player, clear_context, context, init_screen, main_screen;

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

Player = (function() {
  function Player(speed) {
    this.image = new Image();
    this.image.src = "img/player.png";
    this.speed = speed;
    this.x = (main_screen.width - this.image.width).center();
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
    player.up();
    document.onkeydown = function(pressed_key) {
      if (pressed_key.keyCode === KEY.SPACE) {

      } else if (pressed_key.keyCode === KEY.LEFT) {
        return player.left();
      } else if (pressed_key.keyCode === KEY.UP) {
        return player.up();
      } else if (pressed_key.keyCode === KEY.RIGHT) {
        return player.right();
      } else if (pressed_key.keyCode === KEY.DOWN) {
        return player.down();
      }
    };
    clear_context();
    player.draw();
    return setTimeout(main, 20);
  };
  $(this).attr("disabled", true);
  player = new Player(20);
  return main();
});
