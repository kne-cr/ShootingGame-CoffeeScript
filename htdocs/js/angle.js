var Angle;

Angle = (function() {
  function Angle(speed, rate) {
    this.speed = speed;
    this.rate = rate;
    this.angle = 0;
  }

  Angle.prototype.nextSin = function() {
    this.angle += this.speed;
    return this.angle.sin() * this.rate;
  };

  return Angle;

})();
