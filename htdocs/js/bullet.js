var Bullet,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Bullet = (function(superClass) {
  extend(Bullet, superClass);

  function Bullet(position, speed) {
    this.width = 1;
    this.height = 20;
    position.y - this.height;
    Bullet.__super__.constructor.call(this, position, speed);
  }

  Bullet.prototype.move = function() {
    return this.position.y -= this.speed;
  };

  return Bullet;

})(Solid);
