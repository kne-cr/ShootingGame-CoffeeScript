var ContextAbility;

ContextAbility = (function() {
  function ContextAbility() {}

  ContextAbility.methods = {
    draw_image_of: function(solid) {
      return this.drawImage(solid.image, solid.position.x, solid.position.y);
    },
    draw_image_of_alive: function(solids) {
      var i, len, results, solid;
      results = [];
      for (i = 0, len = solids.length; i < len; i++) {
        solid = solids[i];
        if (!solid.is_dead) {
          results.push(this.draw_image_of(solid));
        }
      }
      return results;
    },
    draw_rect_of: function(solid) {
      this.fillStyle = solid.style;
      return this.fillRect(solid.position.x, solid.position.y, solid.position.width, solid.position.height);
    },
    draw_rect_of_alive: function(solids) {
      var i, len, results, solid;
      results = [];
      for (i = 0, len = solids.length; i < len; i++) {
        solid = solids[i];
        if (!solid.is_dead) {
          results.push(this.draw_rect_of(solid));
        }
      }
      return results;
    }
  };

  ContextAbility.give_to = function(target) {
    var method_content, method_name, ref, results;
    ref = this.methods;
    results = [];
    for (method_name in ref) {
      method_content = ref[method_name];
      results.push(target[method_name] = method_content);
    }
    return results;
  };

  return ContextAbility;

})();
