var Bullet,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Bullet = (function(superClass) {
  extend(Bullet, superClass);

  function Bullet(x, y, speed) {
    this.style = "rgb(255, 255, 255)";
    Bullet.__super__.constructor.call(this, new Position(x, y, 1, 20, speed), true);
  }

  Bullet.prototype.move = function() {
    this.position.up();
    if (this.position.bottom_y() < 0) {
      return this.is_dead = true;
    }
  };

  return Bullet;

})(Solid);
