Math.randomBoolean = function() {
  return this.round(this.random());
};

Math.randomNumber = function(range) {
  return this.floor(this.random() * range);
};

Math.sinBy = function(angle) {
  return this.sin(angle * this.PI / 180).toFixed(15);
};
