var Player,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Player = (function(superClass) {
  extend(Player, superClass);

  function Player(x, y, speed) {
    this.image = new Image();
    this.image.src = "img/player.png";
    this.bullets = [];
    Player.__super__.constructor.call(this, x - this.image.width.half(), y - this.image.height.half(), this.image.width, this.image.height, speed);
  }

  Player.prototype.left = function() {
    return this.x -= this.speed;
  };

  Player.prototype.up = function() {
    return this.y -= this.speed;
  };

  Player.prototype.right = function() {
    return this.x += this.speed;
  };

  Player.prototype.down = function() {
    return this.y += this.speed;
  };

  Player.prototype.shoot = function() {
    return this.bullets.push(new Bullet(this.center_x(), this.top_y(), 20));
  };

  return Player;

})(Solid);
