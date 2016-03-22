var YellowMacaron,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

YellowMacaron = (function(superClass) {
  extend(YellowMacaron, superClass);

  function YellowMacaron() {
    YellowMacaron.__super__.constructor.call(this, Setting.ENEMY.YELLOW_MACARON);
  }

  YellowMacaron.prototype.move = function() {
    if (Math.randomBoolean()) {
      this.position.moveLeft();
    } else {
      this.position.moveRight();
    }
    if (Math.randomBoolean()) {
      return this.position.moveDown();
    }
  };

  return YellowMacaron;

})(Enemy);
