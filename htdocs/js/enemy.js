var Enemy,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Enemy = (function(superClass) {
  extend(Enemy, superClass);

  function Enemy(setting) {
    this.setting = setting;
    this.totalEXP = 0;
    this.image = new Image;
    this.image.src = this.setting.IMAGE;
    this.hitPoint = this.setting.HIT_POINT;
    Enemy.__super__.constructor.call(this, new Position(0, 0, this.image.width, this.image.height, this.setting.SPEED), false);
  }

  Enemy.prototype.reset = function() {
    this.isAlive = false;
    this.totalEXP = 0;
    return this.hitPoint = this.setting.HIT_POINT;
  };

  Enemy.prototype.move = function() {};

  Enemy.prototype.damage = function() {
    console.log(this.hitPoint);
    this.hitPoint--;
    if (this.hitPoint <= 0) {
      this.totalEXP += this.setting.EXP;
      return this.clear();
    }
  };

  Enemy.prototype.comeBack = function() {
    this.position.x = Math.randomNumber(Setting.SCREEN.WIDTH);
    this.position.y = 1 - this.image.height;
    this.hitPoint = this.setting.HIT_POINT;
    return this.isAlive = true;
  };

  Enemy.prototype.attack = function(opponent) {
    if (this.hits(opponent)) {
      return opponent.damage();
    }
  };

  return Enemy;

})(Actor);
