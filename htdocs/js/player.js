var Player;

Player = (function() {
  var KEY;

  KEY = {
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  function Player(screen_width, screen_height, speed) {
    this.speed = speed;
    this.image = new Image();
    this.image.src = "img/player.png";
    this.x = screen_width.center() - this.image.width.center();
    this.y = screen_height - this.image.height - 20;
    this.pressed = new Array(240);
  }

  Player.prototype.move = function() {
    if (this.pressed[KEY.LEFT]) {
      this.x -= this.speed;
    }
    if (this.pressed[KEY.UP]) {
      this.y -= this.speed;
    }
    if (this.pressed[KEY.RIGHT]) {
      this.x += this.speed;
    }
    if (this.pressed[KEY.DOWN]) {
      return this.y += this.speed;
    }
  };

  Player.prototype.instruct = function(key) {
    return this.pressed[key.keyCode] = true;
  };

  Player.prototype.cancel = function(key) {
    return this.pressed[key.keyCode] = false;
  };

  return Player;

})();
