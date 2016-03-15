var Player,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Player = (function(superClass) {
  extend(Player, superClass);

  function Player(x, y, speed) {
    this.image = new Image;
    this.image.src = "img/player.png";
    this.bullets = new Bullets(10);
    this.command = new Command;
    Player.__super__.constructor.call(this, new Position(x - this.image.width.half(), y - this.image.height.half(), this.image.width, this.image.height, speed), false);
  }

  Player.prototype.behave = function() {
    if (this.command.is_requested(Command.SPACE)) {
      this.bullets.shoot(this.position);
    }
    if (this.command.is_requested(Command.LEFT)) {
      this.position.left();
    }
    if (this.command.is_requested(Command.UP)) {
      this.position.up();
    }
    if (this.command.is_requested(Command.RIGHT)) {
      this.position.right();
    }
    if (this.command.is_requested(Command.DOWN)) {
      this.position.down();
    }
    return this.bullets.behave();
  };

  return Player;

})(Solid);
