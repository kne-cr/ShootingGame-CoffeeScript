var Bullet,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Bullet = (function(superClass) {
  extend(Bullet, superClass);

  function Bullet() {
    this.style = Setting.PLAYER.BULLET.STYLE;
    Bullet.__super__.constructor.call(this, new Position(0, 0, Setting.PLAYER.BULLET.WIDTH, Setting.PLAYER.BULLET.HEIGHT, Setting.PLAYER.BULLET.SPEED), false);
  }

  Bullet.prototype.move = function() {
    return this.position.moveUp();
  };

  Bullet.prototype.shoot = function(position) {
    this.position.x = position.centerX();
    this.position.y = position.topY();
    return this.isAlive = true;
  };

  Bullet.prototype.attack = function(opponents) {
    var i, len, opponent, results;
    results = [];
    for (i = 0, len = opponents.length; i < len; i++) {
      opponent = opponents[i];
      if (!(this.hits(opponent))) {
        continue;
      }
      opponent.die();
      results.push(this.die());
    }
    return results;
  };

  return Bullet;

})(Actor);
