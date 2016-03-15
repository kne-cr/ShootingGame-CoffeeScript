Math.random_boolean = function() {
  return this.round(this.random());
};

Math.random_number = function(range) {
  return this.floor(this.random() * range);
};
