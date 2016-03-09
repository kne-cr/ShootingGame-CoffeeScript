var Solid;

Solid = (function() {
  function Solid(position, is_dead) {
    this.position = position;
    this.is_dead = is_dead;
  }

  Solid.prototype.die = function() {
    return this.is_dead = true;
  };

  return Solid;

})();
