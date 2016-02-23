var Player,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Player = (function(superClass) {
  var KEY;

  extend(Player, superClass);

  KEY = {
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  function Player(x, y, speed) {
    this.image = new Image();
    this.image.src = "img/player.png";
    this.pressed = new Array(240);
    Player.__super__.constructor.call(this, x - this.image.width.center(), y - this.image.height.center(), speed);
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

})(Solid);
