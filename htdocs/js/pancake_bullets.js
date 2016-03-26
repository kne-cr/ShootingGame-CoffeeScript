var PancakeBullets,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

PancakeBullets = (function(superClass) {
  extend(PancakeBullets, superClass);

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

  PancakeBullets.prototype.shoot = function(position) {
    if (Math.randomNumber(100) < Setting.ENEMY.PANCAKE.BULLET.SHOOT_RATE) {
      return PancakeBullets.__super__.shoot.call(this, position);
    }
  };

  return PancakeBullets;

})(Bullets);
