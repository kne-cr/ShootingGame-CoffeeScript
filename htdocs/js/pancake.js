var Pancake,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Pancake = (function(superClass) {
  extend(Pancake, superClass);

  function Pancake() {
    this.angle = 0;
    this.appearanceFrame = Setting.ENEMY.PANCAKE.APPEARANCE_FRAME;
    this.bullets = new PancakeBullets;
    HorizontallyReboundAbility.giveTo(this);
    Pancake.__super__.constructor.call(this, Setting.ENEMY.PANCAKE);
  }

  Pancake.prototype.isBoss = function() {
    return true;
  };

  Pancake.prototype.move = function() {
    if (!this.isAlive()) {
      return;
    }
    if (!this.completedAppearance()) {
      return this.position.moveDown();
    } else {
      this.swingVertically();
      return this.moveHorizontally();
    }
  };

  Pancake.prototype.reset = function() {
    Pancake.__super__.reset.apply(this, arguments);
    return this.bullets.reset();
  };

  Pancake.prototype.completedAppearance = function() {
    return 0 < this.position.topY();
  };

  Pancake.prototype.swingVertically = function() {
    this.angle += Setting.ENEMY.PANCAKE.SWING.SPEED;
    return this.position.moveDown(Math.sinBy(this.angle) * Setting.ENEMY.PANCAKE.SWING.RANGE);
  };

  Pancake.prototype.comeBack = function() {
    this.position.moveTo((Setting.SCREEN.WIDTH - this.image.width).center(), 1 - this.image.height);
    return this.hitPoint = this.setting.HIT_POINT;
  };

  Pancake.prototype.behave = function(player) {
    Pancake.__super__.behave.call(this, player);
    if (!(this.completedAppearance() && this.isAlive())) {
      return;
    }
    if (Math.randomNumber(100) < Setting.ENEMY.APPEARANCE_RATE) {
      this.bullets.shoot(this.position);
    }
    return this.bullets.behave(player);
  };

  return Pancake;

})(Enemy);
