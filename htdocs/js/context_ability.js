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
    drawImageOfActive: function(actors) {
      var actor, i, len, results;
      results = [];
      for (i = 0, len = actors.length; i < len; i++) {
        actor = actors[i];
        if (!(actor.isActive())) {
          continue;
        }
        this.drawImageOf(actor);
        if (actor.bullets != null) {
          results.push(this.drawImageOfActive(actor.bullets.list));
        } else {
          results.push(void 0);
        }
      }
      return results;
    },
    drawRectOf: function(actor) {
      this.fillStyle = actor.style;
      return this.fillRect(actor.position.x, actor.position.y, actor.position.width, actor.position.height);
    },
    drawRectOfActive: function(actors) {
      var actor, i, len, results;
      results = [];
      for (i = 0, len = actors.length; i < len; i++) {
        actor = actors[i];
        if (actor.isActive()) {
          results.push(this.drawRectOf(actor));
        }
      }
      return results;
    },
    showCenter: function(text) {
      this.textAlign = "center";
      this.textBaseline = "middle";
      this.font = "90px 'ヒラギノ角ゴ'";
      this.fillStyle = "#FFF";
      return this.fillText(text, Setting.SCREEN.WIDTH.center(), Setting.SCREEN.HEIGHT.center());
    },
    showUpperLeft: function(text) {
      this.textAlign = "left";
      this.textBaseline = "top";
      this.font = "30px 'ヒラギノ角ゴ'";
      this.fillStyle = "#FFF";
      return this.fillText(text, Setting.SCREEN.SCORE.PADDING, Setting.SCREEN.SCORE.PADDING);
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
