var Enemies;

Enemies = (function() {
  function Enemies() {
    var i;
    this.list = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = Settings.ENEMY.COUNT; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        results.push(new Enemy1);
      }
      return results;
    })();
  }

  Enemies.prototype.apear = function() {
    var enemy, j, len, ref, results;
    if (Settings.ENEMY.APPEARANCE_RATE < Math.random_number(100)) {
      return;
    }
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      if (!enemy.is_alive) {
        enemy.come_back();
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Enemies.prototype.behave = function(player) {
    var enemy, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      enemy.move();
      results.push(enemy.attack(player));
    }
    return results;
  };

  return Enemies;

})();
