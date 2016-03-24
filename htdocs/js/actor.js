var Actor;

Actor = (function() {
  function Actor(position, hitPoint) {
    this.position = position;
    this.hitPoint = hitPoint;
    this.isDamaged = false;
  }

  Actor.prototype.clear = function() {
    return this.hitPoint = 0;
  };

  Actor.prototype.damage = function() {
    this.hitPoint--;
    return this.isDamaged = true;
  };

  Actor.prototype.isAlive = function() {
    return 0 < this.hitPoint;
  };

  Actor.prototype.isActive = function() {
    return this.isAlive() && !this.isDamaged;
  };

  Actor.prototype.behave = function(opponents) {
    this.isDamaged = false;
    this.move();
    this.attack(opponents);
    return this.clearOffscreen();
  };

  Actor.prototype.move = function() {};

  Actor.prototype.attack = function(opponents) {};

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
