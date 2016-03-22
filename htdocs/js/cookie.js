var Cookie,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Cookie = (function(superClass) {
  extend(Cookie, superClass);

  function Cookie() {
    Cookie.__super__.constructor.call(this, Setting.ENEMY.COOKIE);
  }

  Cookie.prototype.move = function() {
    return this.position.moveDown();
  };

  return Cookie;

})(Enemy);
