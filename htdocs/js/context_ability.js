var ContextAbility;

ContextAbility = (function() {
  function ContextAbility() {}

  ContextAbility.methods = {
    clear: function() {
      return this.clearRect(0, 0, Setting.SCREEN.WIDTH, Setting.SCREEN.HEIGHT);
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
    },
    show: function(text) {
      this.textAlign = "center";
      this.textBaseline = "middle";
      this.font = "90px 'ヒラギノ角ゴ'";
      this.fillStyle = "#FFF";
      return this.fillText(text, Setting.SCREEN.WIDTH.center(), Setting.SCREEN.HEIGHT.center());
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
