var Position;

Position = (function() {
  function Position(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  Position.prototype.move_left = function() {
    return this.x -= this.speed;
  };

  Position.prototype.move_up = function() {
    return this.y -= this.speed;
  };

  Position.prototype.move_right = function() {
    return this.x += this.speed;
  };

  Position.prototype.move_down = function() {
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

  Position.prototype.is_left_end = function() {
    return this.left_x() < 0;
  };

  Position.prototype.is_top_end = function() {
    return this.top_y() < 0;
  };

  Position.prototype.is_right_end = function() {
    return Settings.SCREEN.WIDTH < this.right_x();
  };

  Position.prototype.is_bottom_end = function() {
    return Settings.SCREEN.HEIGHT < this.bottom_y();
  };

  Position.prototype.center_x = function() {
    return (this.left_x() + this.right_x()).center();
  };

  Position.prototype.center_y = function() {
    return (this.top_y() + this.bottom_y()).center();
  };

  Position.prototype.is_in_screen = function() {
    return 0 < this.right_x() && this.left_x() < Settings.SCREEN.WIDTH && 0 < this.bottom_y() && this.top_y() < Settings.SCREEN.HEIGHT;
  };

  Position.prototype.overlaps = function(another) {
    return this.left_x() < another.right_x() && another.left_x() < this.right_x() && this.top_y() < another.bottom_y() && another.top_y() < this.bottom_y();
  };

  return Position;

})();
