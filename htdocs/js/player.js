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

  function Player(speed) {
    this.speed = speed;
    this.image = new Image();
    this.image.src = "img/player.png";
    this.x = main_screen.width.center() - this.image.width.center();
    this.y = main_screen.height - this.image.height - 20;
  }

  Player.prototype.move = function() {
    if (pressed[KEY.LEFT]) {
      this.x -= this.speed;
    }
    if (pressed[KEY.UP]) {
      this.y -= this.speed;
    }
    if (pressed[KEY.RIGHT]) {
      this.x += this.speed;
    }
    if (pressed[KEY.DOWN]) {
      return this.y += this.speed;
    }
  };

  Player.prototype.draw = function() {
    return context.drawImage(this.image, this.x, this.y);
  };

  return Player;

})();
