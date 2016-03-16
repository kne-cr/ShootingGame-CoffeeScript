var Bullets;

Bullets = (function() {
  var SPEED;

  SPEED = 20;

  function Bullets(count) {
    var i;
    this.count = count;
    this.list = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = this.count; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        results.push(new Bullet(SPEED));
      }
      return results;
    }).call(this);
  }

  Bullets.prototype.shoot = function(position) {
    var bullet, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      bullet = ref[j];
      if (!bullet.is_alive) {
        bullet.reset(position);
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Bullets.prototype.behave = function(enemy_list) {
    this.move();
    return this.kill(enemy_list);
  };

  Bullets.prototype.move = function() {
    var bullet, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      bullet = ref[j];
      results.push(bullet.move());
    }
    return results;
  };

  Bullets.prototype.kill = function(enemy_list) {
    var enemy, j, len, results;
    results = [];
    for (j = 0, len = enemy_list.length; j < len; j++) {
      enemy = enemy_list[j];
      if (this.hits_to(enemy)) {
        results.push(enemy.die());
      }
    }
    return results;
  };

  Bullets.prototype.hits_to = function(other) {
    return this.list.some(function(bullet) {
      return bullet.is_alive && bullet.hits_to(other);
    });
  };

  return Bullets;

})();
