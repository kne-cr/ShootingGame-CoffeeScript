var Bullet,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Bullet = (function(superClass) {
  extend(Bullet, superClass);

  function Bullet() {
    return Bullet.__super__.constructor.apply(this, arguments);
  }

  Bullet.prototype.move = function() {
    return this.y -= this.speed;
  };

  return Bullet;

})(Solid);
