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
        results.push(new Bullet(0, 0, SPEED));
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
      if (bullet.is_dead) {
        bullet.reset(position);
        break;
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Bullets.prototype.action = function() {
    var bullet, j, len, ref, results;
    ref = this.list;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      bullet = ref[j];
      results.push(bullet.move());
    }
    return results;
  };

  return Bullets;

})();
