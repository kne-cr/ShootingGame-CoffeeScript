var HorizontallyReboundAbility;

HorizontallyReboundAbility = (function() {
  function HorizontallyReboundAbility() {}

  HorizontallyReboundAbility.methods = {
    moveHorizontally: function() {
      if (this.goesToRight) {
        return this.moveRight();
      } else {
        return this.moveLeft();
      }
    },
    moveRight: function() {
      this.position.moveRight();
      if (this.position.isRightEnd()) {
        return this.goesToRight = false;
      }
    },
    moveLeft: function() {
      this.position.moveLeft();
      if (this.position.isLeftEnd()) {
        return this.goesToRight = true;
      }
    }
  };

  HorizontallyReboundAbility.giveTo = function(target) {
    var methodContent, methodName, ref;
    ref = this.methods;
    for (methodName in ref) {
      methodContent = ref[methodName];
      target[methodName] = methodContent;
    }
    return target.goesToRight = Math.randomBoolean();
  };

  return HorizontallyReboundAbility;

})();
