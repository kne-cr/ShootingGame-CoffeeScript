var Enemy1,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Enemy1 = (function(superClass) {
  extend(Enemy1, superClass);

  function Enemy1(speed) {
    this.image = new Image;
    this.image.src = "img/enemy1.png";
    Enemy1.__super__.constructor.call(this, new Position(0, 0, this.image.width, this.image.height, speed), true);
  }

  Enemy1.prototype.move = function() {
    if (Math.random_boolean()) {
      this.position.left();
    } else {
      this.position.right();
    }
    if (Math.random_boolean()) {
      return this.position.down();
    }
  };

  Enemy1.prototype.come_back = function(x) {
    this.position.x = x;
    this.position.y = 1 - this.image.height;
    return this.is_dead = false;
  };

  return Enemy1;

})(Solid);
