var Position;

Position = (function() {
  function Position(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  Position.prototype.moveLeft = function() {
    return this.x -= this.speed;
  };

  Position.prototype.moveUp = function() {
    return this.y -= this.speed;
  };

  Position.prototype.moveRight = function() {
    return this.x += this.speed;
  };

  Position.prototype.moveDown = function() {
    return this.y += this.speed;
  };

  Position.prototype.leftX = function() {
    return this.x;
  };

  Position.prototype.rightX = function() {
    return this.x + this.width;
  };

  Position.prototype.topY = function() {
    return this.y;
  };

  Position.prototype.bottomY = function() {
    return this.y + this.height;
  };

  Position.prototype.isLeftEnd = function() {
    return this.leftX() < 0;
  };

  Position.prototype.isTopEnd = function() {
    return this.topY() < 0;
  };

  Position.prototype.isRightEnd = function() {
    return Setting.SCREEN.WIDTH < this.rightX();
  };

  Position.prototype.isBottomEnd = function() {
    return Setting.SCREEN.HEIGHT < this.bottomY();
  };

  Position.prototype.centerX = function() {
    return (this.leftX() + this.rightX()).center();
  };

  Position.prototype.centerY = function() {
    return (this.topY() + this.bottomY()).center();
  };

  Position.prototype.isInScreen = function() {
    return 0 < this.rightX() && this.leftX() < Setting.SCREEN.WIDTH && 0 < this.bottomY() && this.topY() < Setting.SCREEN.HEIGHT;
  };

  Position.prototype.overlaps = function(another) {
    return this.leftX() < another.rightX() && another.leftX() < this.rightX() && this.topY() < another.bottomY() && another.topY() < this.bottomY();
  };

  return Position;

})();
