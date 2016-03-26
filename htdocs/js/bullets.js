var Bullets;

Bullets = (function() {
  function Bullets() {
    this.list = [];
  }

  Bullets.prototype.reset = function() {
    var bullet, i, len, ref, results;
    ref = this.list;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      bullet = ref[i];
      results.push(bullet.clear());
    }
    return results;
  };

  Bullets.prototype.shoot = function(position) {
    var bullet, i, len, ref, results;
    ref = this.list;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      bullet = ref[i];
      if (!bullet.isAlive()) {
        bullet.shoot(position);
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Bullets.prototype.behave = function(opponents) {
    var bullet, i, len, ref, results;
    ref = this.list;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      bullet = ref[i];
      results.push(bullet.behave(opponents));
    }
    return results;
  };

  return Bullets;

})();
