var ContextAbility;

ContextAbility = (function() {
  function ContextAbility() {}

  ContextAbility.methods = {
    clear: function() {
      return this.clearRect(0, 0, Settings.SCREEN.WIDTH, Settings.SCREEN.HEIGHT);
    },
    drawImageOf: function(actor) {
      return this.drawImage(actor.image, actor.position.x, actor.position.y);
    },
    drawImageOfAlive: function(actors) {
      var actor, i, len, results;
      results = [];
      for (i = 0, len = actors.length; i < len; i++) {
        actor = actors[i];
        if (actor.isAlive) {
          results.push(this.drawImageOf(actor));
        }
      }
      return results;
    },
    drawRectOf: function(actor) {
      this.fillStyle = actor.style;
      return this.fillRect(actor.position.x, actor.position.y, actor.position.width, actor.position.height);
    },
    drawRectOfAlive: function(actors) {
      var actor, i, len, results;
      results = [];
      for (i = 0, len = actors.length; i < len; i++) {
        actor = actors[i];
        if (actor.isAlive) {
          results.push(this.drawRectOf(actor));
        }
      }
      return results;
    }
  };

  ContextAbility.giveTo = function(target) {
    var methodContent, methodName, ref, results;
    ref = this.methods;
    results = [];
    for (methodName in ref) {
      methodContent = ref[methodName];
      results.push(target[methodName] = methodContent);
    }
    return results;
  };

  return ContextAbility;

})();
