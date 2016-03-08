var Player,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Player = (function(superClass) {
  extend(Player, superClass);

  function Player(x, y, speed) {
    this.image = new Image();
    this.image.src = "img/player.png";
    this.bullets = new Bullets(10);
    Player.__super__.constructor.call(this, new Position(x - this.image.width.half(), y - this.image.height.half(), this.image.width, this.image.height, speed), false);
  }

  Player.prototype.left = function() {
    return this.position.left();
  };

  Player.prototype.up = function() {
    return this.position.up();
  };

  Player.prototype.right = function() {
    return this.position.right();
  };

  Player.prototype.down = function() {
    return this.position.down();
  };

  Player.prototype.shoot = function() {
    return this.bullets.shoot(this.position.center_x(), this.position.top_y());
  };

  return Player;

})(Solid);
