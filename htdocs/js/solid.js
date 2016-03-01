var Solid;

Solid = (function() {
  function Solid(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  Solid.prototype.left_x = function() {
    return this.x;
  };

  Solid.prototype.right_x = function() {
    return this.x + this.width;
  };

  Solid.prototype.top_y = function() {
    return this.y;
  };

  Solid.prototype.bottom_y = function() {
    return this.y + this.height;
  };

  Solid.prototype.center_x = function() {
    return (this.left_x() + this.right_x()).center();
  };

  Solid.prototype.center_y = function() {
    return (this.top_y() + this.bottom_y()).center();
  };

  Solid.prototype.move = function() {};

  return Solid;

})();
