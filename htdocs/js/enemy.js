var Enemy,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Enemy = (function(superClass) {
  extend(Enemy, superClass);

  function Enemy(setting) {
    this.exp = setting.EXP;
    this.totalEXP = 0;
    this.image = new Image;
    this.image.src = setting.IMAGE;
    Enemy.__super__.constructor.call(this, new Position(0, 0, this.image.width, this.image.height, setting.SPEED), false);
  }

  Enemy.prototype.reset = function() {
    this.isAlive = false;
    return this.totalEXP = 0;
  };

  Enemy.prototype.move = function() {};

  Enemy.prototype.die = function() {
    this.totalEXP += this.exp;
    return this.clear();
  };

  Enemy.prototype.comeBack = function() {
    this.position.x = Math.randomNumber(Setting.SCREEN.WIDTH);
    this.position.y = 1 - this.image.height;
    return this.isAlive = true;
  };

  Enemy.prototype.attack = function(opponent) {
    if (this.hits(opponent)) {
      return opponent.die();
    }
  };

  return Enemy;

})(Actor);
