var ScreenAbility;

ScreenAbility = (function() {
  function ScreenAbility() {}

  ScreenAbility.methods = {
    includes: function(solid) {
      return 0 < solid.position.right_x() && solid.position.left_x() < this.width && 0 < solid.position.bottom_y() && solid.position.top_y() < this.height;
    },
    clear_out_of_range: function(solids) {
      var i, len, ref, results, solid;
      ref = [].concat.apply([], solids);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        solid = ref[i];
        if (!this.includes(solid)) {
          results.push(solid.die());
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  };

  ScreenAbility.give_to = function(target) {
    var method_content, method_name, ref, results;
    ref = this.methods;
    results = [];
    for (method_name in ref) {
      method_content = ref[method_name];
      results.push(target[method_name] = method_content);
    }
    return results;
  };

  return ScreenAbility;

})();
