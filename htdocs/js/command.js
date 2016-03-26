var Command;

Command = (function() {
  Command.ENTER = 13;

  Command.SPACE = 32;

  Command.LEFT = 37;

  Command.UP = 38;

  Command.RIGHT = 39;

  Command.DOWN = 40;

  function Command() {
    this.requested = new Array(240);
  }

  Command.prototype.reset = function() {
    this.requested[Command.ENTER] = false;
    this.requested[Command.SPACE] = false;
    this.requested[Command.LEFT] = false;
    this.requested[Command.UP] = false;
    this.requested[Command.RIGHT] = false;
    return this.requested[Command.DOWN] = false;
  };

  Command.prototype.request = function(type) {
    return this.requested[type] = true;
  };

  Command.prototype.cancel = function(type) {
    return this.requested[type] = false;
  };

  Command.prototype.isRequested = function(type) {
    return this.requested[type];
  };

  return Command;

})();
