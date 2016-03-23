var Pancake,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Pancake = (function(superClass) {
  extend(Pancake, superClass);

  function Pancake() {
    this.angle = 0;
    this.goesToRight = Math.randomBoolean();
    Pancake.__super__.constructor.call(this, Setting.ENEMY.PANCAKE);
  }

  Pancake.prototype.move = function() {
    if (!this.isAlive()) {
      return;
    }
    if (!this.completedAppearance()) {
      return this.position.moveDown();
    } else {
      this.angle += Setting.ENEMY.PANCAKE.SWING.SPEED;
      this.position.moveDown(Math.sinBy(this.angle) * Setting.ENEMY.PANCAKE.SWING.RANGE);
      if (this.goesToRight) {
        return this.moveRight();
      } else {
        return this.moveLeft();
      }
    }
  };

  Pancake.prototype.completedAppearance = function() {
    return 0 < this.position.topY();
  };

  Pancake.prototype.moveRight = function() {
    this.position.moveRight();
    if (this.position.isRightEnd()) {
      return this.goesToRight = false;
    }
  };

  Pancake.prototype.moveLeft = function() {
    this.position.moveLeft();
    if (this.position.isLeftEnd()) {
      return this.goesToRight = true;
    }
  };

  return Pancake;

})(Enemy);
