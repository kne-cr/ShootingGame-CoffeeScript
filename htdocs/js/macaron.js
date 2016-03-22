var Macaron,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Macaron = (function(superClass) {
  extend(Macaron, superClass);

  function Macaron() {
    Macaron.__super__.constructor.call(this, Setting.ENEMY.MACARON);
  }

  Macaron.prototype.move = function() {
    if (Math.randomBoolean()) {
      this.position.moveLeft();
    } else {
      this.position.moveRight();
    }
    if (Math.randomBoolean()) {
      return this.position.moveDown();
    }
  };

  return Macaron;

})(Enemy);
