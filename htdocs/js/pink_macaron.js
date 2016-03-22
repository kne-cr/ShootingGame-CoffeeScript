var PinkMacaron,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PinkMacaron = (function(superClass) {
  extend(PinkMacaron, superClass);

  function PinkMacaron() {
    PinkMacaron.__super__.constructor.call(this, Setting.ENEMY.PINK_MACARON);
  }

  PinkMacaron.prototype.move = function() {
    return this.position.moveDown();
  };

  return PinkMacaron;

})(Enemy);
