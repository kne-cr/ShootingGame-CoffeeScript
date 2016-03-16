var Bullets;

Bullets = (function() {
  function Bullets() {
    var i;
    this.list = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = Settings.PLAYER.BULLET.COUNT; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        results.push(new Bullet);
      }
      return results;
    })();
  }

  Bullets.prototype.shoot = function(position) {
    var bullet, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      bullet = ref[j];
      if (!bullet.isAlive) {
        bullet.reset(position);
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Bullets.prototype.behave = function(opponents) {
    var bullet, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      bullet = ref[j];
      bullet.move();
      bullet.attack(opponents);
      results.push(bullet.clearOffscreen());
    }
    return results;
  };

  return Bullets;

})();
