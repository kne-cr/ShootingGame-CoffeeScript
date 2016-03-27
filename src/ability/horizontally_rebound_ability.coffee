class HorizontallyReboundAbility
  @methods:
    moveHorizontally: ->
      # trueの場合は右、falseの場合は左に移動
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