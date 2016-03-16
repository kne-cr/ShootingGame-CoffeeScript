var Player,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Player = (function(superClass) {
  extend(Player, superClass);

  function Player() {
    this.image = new Image;
    this.image.src = Settings.PLAYER.IMAGE;
    this.bullets = new Bullets;
    this.command = new Command;
    Player.__super__.constructor.call(this, new Position(Settings.SCREEN.WIDTH.center() - this.image.width.half(), Settings.SCREEN.HEIGHT - 50 - this.image.height.half(), this.image.width, this.image.height, Settings.PLAYER.SPEED), true);
  }

  Player.prototype.behave = function(enemy_list) {
    if (this.command.is_requested(Command.SPACE)) {
      this.bullets.shoot(this.position);
    }
    if (this.command.is_requested(Command.LEFT) && !this.position.is_left_end()) {
      this.position.move_left();
    }
    if (this.command.is_requested(Command.UP) && !this.position.is_top_end()) {
      this.position.move_up();
    }
    if (this.command.is_requested(Command.RIGHT) && !this.position.is_right_end()) {
      this.position.move_right();
    }
    if (this.command.is_requested(Command.DOWN) && !this.position.is_bottom_end()) {
      this.position.move_down();
    }
    return this.bullets.behave(enemy_list);
  };

  return Player;

})(Solid);
