var Solid;

Solid = (function() {
  function Solid(position, is_alive) {
    this.position = position;
    this.is_alive = is_alive;
  }

  Solid.prototype.die = function() {
    return this.is_alive = false;
  };

  Solid.prototype.hits_to = function(other) {
    return this.position.overlaps(other.position);
  };

  return Solid;

})();
