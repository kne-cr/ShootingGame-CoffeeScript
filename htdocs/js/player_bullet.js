var PlayerBullet,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PlayerBullet = (function(superClass) {
  extend(PlayerBullet, superClass);

  function PlayerBullet() {
    this.style = Setting.PLAYER.BULLET.STYLE;
    PlayerBullet.__super__.constructor.call(this, new Position(0, 0, Setting.PLAYER.BULLET.WIDTH, Setting.PLAYER.BULLET.HEIGHT, Setting.PLAYER.BULLET.SPEED), 0);
  }

  PlayerBullet.prototype.move = function() {
    return this.position.moveUp();
  };

  PlayerBullet.prototype.shoot = function(shooter) {
    this.position.moveTo(shooter.centerX(), shooter.topY());
    return this.hitPoint = Setting.PLAYER.BULLET.HIT_POINT;
  };

  PlayerBullet.prototype.attack = function(enemyies) {
    var enemy, i, len, results;
    results = [];
    for (i = 0, len = enemyies.length; i < len; i++) {
      enemy = enemyies[i];
      if (!(this.hits(enemy))) {
        continue;
      }
      enemy.damage();
      results.push(this.clear());
    }
    return results;
  };

  return PlayerBullet;

})(Actor);
