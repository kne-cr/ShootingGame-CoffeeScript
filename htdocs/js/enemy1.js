var Enemy1,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Enemy1 = (function(superClass) {
  extend(Enemy1, superClass);

  function Enemy1(x, y, speed) {
    this.image = new Image();
    this.image.src = "img/enemy1.png";
    Enemy1.__super__.constructor.call(this, new Position(x - this.image.width.half(), y - this.image.height.half(), this.image.width, this.image.height, speed), false);
  }

  Enemy1.prototype.move = function() {
    this.position.down();
    if (Math.round(Math.random())) {
      this.position.left();
    }
    if (Math.round(Math.random())) {
      this.position.up();
    }
    if (Math.round(Math.random())) {
      this.position.right();
    }
    if (Math.round(Math.random())) {
      return this.position.down();
    }
  };

  return Enemy1;

})(Solid);
