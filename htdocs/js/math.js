Math.randomBoolean = function() {
  return this.round(this.random());
};

Math.randomNumber = function(range) {
  return this.floor(this.random() * range);
};
