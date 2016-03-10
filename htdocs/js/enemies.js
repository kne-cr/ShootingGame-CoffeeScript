var Enemies;

Enemies = (function() {
  var SPEED;

  SPEED = 10;

  function Enemies(x_range, count, appearance_rate) {
    var i;
    this.x_range = x_range;
    this.count = count;
    this.appearance_rate = appearance_rate;
    this.list = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = this.count; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        results.push(new Enemy1(SPEED));
      }
      return results;
    }).call(this);
  }

  Enemies.prototype.action = function() {
    this.apear();
    return this.move();
  };

  Enemies.prototype.apear = function() {
    var enemy, j, len, ref, results;
    if (this.appearance_rate <= Math.random_number(100)) {
      return;
    }
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      if (enemy.is_dead) {
        enemy.apear(Math.random_number(this.x_range));
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Enemies.prototype.move = function() {
    var enemy, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      results.push(enemy.move());
    }
    return results;
  };

  return Enemies;

})();
