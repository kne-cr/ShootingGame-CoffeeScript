var GreenMacaron,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

GreenMacaron = (function(superClass) {
  extend(GreenMacaron, superClass);

  function GreenMacaron() {
    this.goesToRight = Math.randomBoolean();
    GreenMacaron.__super__.constructor.call(this, Setting.ENEMY.GREEN_MACARON);
  }

  GreenMacaron.prototype.move = function() {
    if (this.goesToRight) {
      this.moveRight();
    } else {
      this.moveLeft();
    }
    return this.position.moveDown();
  };

  GreenMacaron.prototype.moveRight = function() {
    this.position.moveRight();
    this.position.moveRight();
    if (this.position.isRightEnd()) {
      return this.goesToRight = false;
    }
  };

  GreenMacaron.prototype.moveLeft = function() {
    this.position.moveLeft();
    this.position.moveLeft();
    if (this.position.isLeftEnd()) {
      return this.goesToRight = true;
    }
  };

  return GreenMacaron;

})(Enemy);
