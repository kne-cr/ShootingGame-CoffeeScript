var Enemies;

Enemies = (function() {
  function Enemies() {
    var i, j, k, l, m, n, ref, ref1, ref2, ref3, ref4;
    this.list = [];
    for (i = j = 0, ref = Setting.ENEMY.YELLOW_MACARON.COUNT; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      this.list.push(new YellowMacaron);
    }
    for (i = k = 0, ref1 = Setting.ENEMY.BLUE_MACARON.COUNT; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
      this.list.push(new BlueMacaron);
    }
    for (i = l = 0, ref2 = Setting.ENEMY.GREEN_MACARON.COUNT; 0 <= ref2 ? l < ref2 : l > ref2; i = 0 <= ref2 ? ++l : --l) {
      this.list.push(new GreenMacaron);
    }
    for (i = m = 0, ref3 = Setting.ENEMY.PINK_MACARON.COUNT; 0 <= ref3 ? m < ref3 : m > ref3; i = 0 <= ref3 ? ++m : --m) {
      this.list.push(new PinkMacaron);
    }
    for (i = n = 0, ref4 = Setting.ENEMY.PANCAKE.COUNT; 0 <= ref4 ? n < ref4 : n > ref4; i = 0 <= ref4 ? ++n : --n) {
      this.list.push(new Pancake);
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
      this.list.sort(function() {
        return Math.randomBoolean();
      });
      ref = this.list;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        enemy = ref[j];
        if (!enemy.isAlive()) {
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
