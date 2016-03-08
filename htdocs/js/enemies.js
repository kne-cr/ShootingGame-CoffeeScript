var Enemies;

Enemies = (function() {
  var SPEED;

  SPEED = 5;

  function Enemies(x_range, count, appearance_rate) {
    var i;
    this.x_range = x_range;
    this.count = count;
    this.appearance_rate = appearance_rate;
    this.list = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = this.count; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        results.push(new Enemy1(0, 0, SPEED));
      }
      return results;
    }).call(this);
  }

  Enemies.prototype.apear = function() {
    var enemy, j, len, ref, results;
    if (this.appearance_rate <= Math.random() * 100) {
      return;
    }
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      enemy = ref[j];
      if (enemy.is_dead) {
        enemy.apear(Math.floor(Math.random() * this.x_range));
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  return Enemies;

})();
