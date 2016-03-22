class GreenMacaron extends Enemy
  constructor: ->
    # trueの場合は右、falseの場合は左に移動
    @goesToRight = Math.randomBoolean()
    super Setting.ENEMY.GREEN_MACARON

  move: ->
    if @goesToRight then @moveRight() else @moveLeft()
    @position.moveDown()

  moveRight: ->
    @position.moveRight()
    @goesToRight = false if @position.isRightEnd()

  moveLeft: ->
    @position.moveLeft()
    @goesToRight = true if @position.isLeftEnd()
