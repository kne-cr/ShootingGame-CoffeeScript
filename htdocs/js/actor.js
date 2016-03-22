var Actor;

Actor = (function() {
  function Actor(position, hitPoint) {
    this.position = position;
    this.hitPoint = hitPoint;
  }

  Actor.prototype.clear = function() {
    return this.hitPoint = 0;
  };

  Actor.prototype.damage = function() {
    return this.hitPoint--;
  };

  Actor.prototype.isAlive = function() {
    return 0 < this.hitPoint;
  };

  Actor.prototype.hits = function(another) {
    return this.isAlive() && another.isAlive() && this.position.overlaps(another.position);
  };

  Actor.prototype.clearOffscreen = function() {
    if (!this.position.isInScreen()) {
      return this.clear();
    }
  };

  return Actor;

})();
