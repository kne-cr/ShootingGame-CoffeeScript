var BlueMacaron,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

BlueMacaron = (function(superClass) {
  extend(BlueMacaron, superClass);

  function BlueMacaron() {
    BlueMacaron.__super__.constructor.call(this, Setting.ENEMY.BLUE_MACARON);
  }

  BlueMacaron.prototype.move = function() {
    if (Math.randomBoolean() && Math.randomBoolean()) {
      return this.position.moveDown();
    }
  };

  return BlueMacaron;

})(Enemy);
