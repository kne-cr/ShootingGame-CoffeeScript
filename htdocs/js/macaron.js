var Macaron,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Macaron = (function(superClass) {
  extend(Macaron, superClass);

  function Macaron() {
    this.image = new Image;
    this.image.src = Settings.ENEMY.MACARON.IMAGE;
    Macaron.__super__.constructor.call(this, new Position(0, 0, this.image.width, this.image.height, Settings.ENEMY.MACARON.SPEED), false);
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

  Macaron.prototype.comeBack = function() {
    this.position.x = Math.randomNumber(Settings.SCREEN.WIDTH);
    this.position.y = 1 - this.image.height;
    return this.isAlive = true;
  };

  Macaron.prototype.attack = function(opponent) {
    if (this.hits(opponent)) {
      return opponent.die();
    }
  };

  return Macaron;

})(Actor);
