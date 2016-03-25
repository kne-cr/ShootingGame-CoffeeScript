var PancakeBullets;

PancakeBullets = (function() {
  function PancakeBullets() {
    var i;
    this.list = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = Setting.ENEMY.PANCAKE.BULLET.COUNT; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        results.push(new PancakeBullet);
      }
      return results;
    })();
  }

  PancakeBullets.prototype.reset = function() {
    var bullet, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      bullet = ref[j];
      results.push(bullet.clear());
    }
    return results;
  };

  PancakeBullets.prototype.shoot = function(position) {
    var bullet, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      bullet = ref[j];
      if (!bullet.isAlive()) {
        bullet.shoot(position);
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  PancakeBullets.prototype.behave = function(player) {
    var bullet, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      bullet = ref[j];
      results.push(bullet.behave(player));
    }
    return results;
  };

  return PancakeBullets;

})();
