var Enemies;

Enemies = (function() {
  function Enemies() {
    var i, j, k, ref, ref1;
    this.list = [];
    for (i = j = 0, ref = Setting.ENEMY.MACARON.COUNT; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      this.list.push(new Macaron);
    }
    for (i = k = 0, ref1 = Setting.ENEMY.COOKIE.COUNT; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
      this.list.push(new Cookie);
    }
  }

  Enemies.prototype.reset = function() {
    var enemy, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      results.push(enemy.reset());
    }
    return results;
  };

  Enemies.prototype.totalEXP = function() {
    var enemy;
    return ((function() {
      var j, len, ref, results;
      ref = this.list;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        enemy = ref[j];
        results.push(enemy.totalEXP);
      }
      return results;
    }).call(this)).reduce(function(a, b) {
      return a + b;
    });
  };

  Enemies.prototype.apear = function() {
    var enemy, j, len, ref, results;
    if (Math.randomNumber(100) < Setting.ENEMY.APPEARANCE_RATE) {
      ref = this.list;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        enemy = ref[j];
        if (!enemy.isAlive) {
          enemy.comeBack();
          break;
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  };

  Enemies.prototype.behave = function(player) {
    var enemy, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      enemy.move();
      enemy.attack(player);
      results.push(enemy.clearOffscreen());
    }
    return results;
  };

  return Enemies;

})();
