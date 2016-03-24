var Bullet,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Bullet = (function(superClass) {
  extend(Bullet, superClass);

  function Bullet() {
    this.style = Setting.PLAYER.BULLET.STYLE;
    Bullet.__super__.constructor.call(this, new Position(0, 0, Setting.PLAYER.BULLET.WIDTH, Setting.PLAYER.BULLET.HEIGHT, Setting.PLAYER.BULLET.SPEED), 0);
  }

  Bullet.prototype.move = function() {
    return this.position.moveUp();
  };

  Bullet.prototype.shoot = function(shooter) {
    this.position.moveTo(shooter.centerX(), shooter.topY());
    return this.hitPoint = Setting.PLAYER.BULLET.HIT_POINT;
  };

  Bullet.prototype.attack = function(opponents) {
    var i, len, opponent, results;
    results = [];
    for (i = 0, len = opponents.length; i < len; i++) {
      opponent = opponents[i];
      if (!(this.hits(opponent))) {
        continue;
      }
      opponent.damage();
      results.push(this.clear());
    }
    return results;
  };

  return Bullet;

})(Actor);
