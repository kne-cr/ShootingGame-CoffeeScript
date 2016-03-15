var Position;

Position = (function() {
  function Position(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  Position.prototype.left = function() {
    return this.x -= this.speed;
  };

  Position.prototype.up = function() {
    return this.y -= this.speed;
  };

  Position.prototype.right = function() {
    return this.x += this.speed;
  };

  Position.prototype.down = function() {
    return this.y += this.speed;
  };

  Position.prototype.left_x = function() {
    return this.x;
  };

  Position.prototype.right_x = function() {
    return this.x + this.width;
  };

  Position.prototype.top_y = function() {
    return this.y;
  };

  Position.prototype.bottom_y = function() {
    return this.y + this.height;
  };

  Position.prototype.center_x = function() {
    return (this.left_x() + this.right_x()).center();
  };

  Position.prototype.center_y = function() {
    return (this.top_y() + this.bottom_y()).center();
  };

  Position.prototype.overlaps = function(other) {
    return this.left_x() < other.right_x() && other.left_x() < this.right_x() && this.top_y() < other.bottom_y() && other.top_y() < this.bottom_y();
  };

  return Position;

})();
