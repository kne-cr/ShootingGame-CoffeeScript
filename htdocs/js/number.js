Number.prototype.center = function() {
  return this.half();
};

Number.prototype.half = function() {
  return this / 2;
};

Number.prototype.sin = function() {
  return Math.sin(this * Math.PI / 180).toFixed(15);
};
