var Cookie,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Cookie = (function(superClass) {
  extend(Cookie, superClass);

  function Cookie() {
    this.exp = Setting.ENEMY.COOKIE.EXP;
    this.totalEXP = 0;
    this.image = new Image;
    this.image.src = Setting.ENEMY.COOKIE.IMAGE;
    Cookie.__super__.constructor.call(this, new Position(0, 0, this.image.width, this.image.height, Setting.ENEMY.COOKIE.SPEED), false);
  }

  Cookie.prototype.reset = function() {
    this.isAlive = false;
    return this.totalEXP = 0;
  };

  Cookie.prototype.move = function() {
    return this.position.moveDown();
  };

  Cookie.prototype.die = function() {
    this.totalEXP += this.exp;
    return this.clear();
  };

  Cookie.prototype.comeBack = function() {
    this.position.x = Math.randomNumber(Setting.SCREEN.WIDTH);
    this.position.y = 1 - this.image.height;
    return this.isAlive = true;
  };

  Cookie.prototype.attack = function(opponent) {
    if (this.hits(opponent)) {
      return opponent.die();
    }
  };

  return Cookie;

})(Actor);
