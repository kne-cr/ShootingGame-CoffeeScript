var Bullet,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Bullet = (function(superClass) {
  extend(Bullet, superClass);

  function Bullet(speed) {
    this.style = "rgb(255, 255, 255)";
    Bullet.__super__.constructor.call(this, new Position(0, 0, 1, 20, speed), true);
  }

  Bullet.prototype.move = function() {
    return this.position.up();
  };

  Bullet.prototype.reset = function(position) {
    this.position.x = position.center_x();
    this.position.y = position.top_y();
    return this.is_dead = false;
  };

  return Bullet;

})(Solid);
