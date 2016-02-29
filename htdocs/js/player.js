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
    this.bullets = [];
    Player.__super__.constructor.call(this, new Position(x - this.image.width.half(), y - this.image.height.half()), speed);
  }

  Player.prototype.center = function() {
    return new Position(this.position.x + this.image.width.half(), this.position.y, +this.image.height.half());
  };

  Player.prototype.action = function() {
    this.move();
    return this.shoot();
  };

  Player.prototype.move = function() {
    if (this.pressed[KEY.LEFT]) {
      this.position.x -= this.speed;
    }
    if (this.pressed[KEY.UP]) {
      this.position.y -= this.speed;
    }
    if (this.pressed[KEY.RIGHT]) {
      this.position.x += this.speed;
    }
    if (this.pressed[KEY.DOWN]) {
      return this.position.y += this.speed;
    }
  };

  Player.prototype.shoot = function() {
    if (this.pressed[KEY.SPACE]) {
      return this.bullets.push(new Bullet(this.center(), 20));
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
