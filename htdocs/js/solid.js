var Solid;

Solid = (function() {
  function Solid(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  Solid.prototype.left = function() {
    return this.x;
  };

  Solid.prototype.right = function() {
    return this.x + this.width;
  };

  Solid.prototype.top = function() {
    return this.y;
  };

  Solid.prototype.bottom = function() {
    return this.y + this.height;
  };

  Solid.prototype.center_x = function() {
    return (this.left() + this.right()).center();
  };

  Solid.prototype.center_y = function() {
    return (this.top() + this.bottom()).center();
  };

  Solid.prototype.move = function() {};

  return Solid;

})();
