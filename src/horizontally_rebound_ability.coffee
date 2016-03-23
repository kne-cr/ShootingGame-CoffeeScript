class HorizontallyReboundAbility
  @methods:
    moveHorizontally: ->
      if @goesToRight then @moveRight() else @moveLeft()

    moveRight: ->
      @position.moveRight()
      @goesToRight = false if @position.isRightEnd()

    moveLeft: ->
      @position.moveLeft()
      @goesToRight = true if @position.isLeftEnd()

  # 引数にメソッドを付与する
  @giveTo: (target) ->
    target[methodName] = methodContent for methodName, methodContent of @methods
    target.goesToRight = Math.randomBoolean()