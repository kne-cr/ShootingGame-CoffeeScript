var PancakeBullet,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PancakeBullet = (function(superClass) {
  extend(PancakeBullet, superClass);

  function PancakeBullet() {
    PancakeBullet.__super__.constructor.call(this, Setting.ENEMY.PANCAKE.BULLET);
  }

  PancakeBullet.prototype.move = function() {
    return this.position.moveDown();
  };

  PancakeBullet.prototype.shoot = function(shooter) {
    this.position.moveTo(shooter.centerX() - this.image.width.half(), shooter.bottomY());
    return this.hitPoint = Setting.ENEMY.PANCAKE.BULLET.HIT_POINT;
  };

  PancakeBullet.prototype.attack = function(player) {
    if (this.hits(player)) {
      player.damage();
      return this.clear();
    }
  };

  return PancakeBullet;

})(Enemy);
