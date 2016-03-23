var GreenMacaron,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

GreenMacaron = (function(superClass) {
  extend(GreenMacaron, superClass);

  function GreenMacaron() {
    HorizontallyReboundAbility.giveTo(this);
    GreenMacaron.__super__.constructor.call(this, Setting.ENEMY.GREEN_MACARON);
  }

  GreenMacaron.prototype.move = function() {
    this.moveHorizontally();
    return this.position.moveDown();
  };

  return GreenMacaron;

})(Enemy);
