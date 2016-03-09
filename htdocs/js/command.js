var Command;

Command = (function() {
  Command.SPACE = 32;

  Command.LEFT = 37;

  Command.UP = 38;

  Command.RIGHT = 39;

  Command.DOWN = 40;

  function Command() {
    this.requested = new Array(240);
  }

  Command.prototype.request = function(type) {
    return this.requested[type] = true;
  };

  Command.prototype.cancel = function(type) {
    return this.requested[type] = false;
  };

  Command.prototype.is_requested = function(type) {
    return this.requested[type];
  };

  return Command;

})();
