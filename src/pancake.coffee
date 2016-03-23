class Pancake extends Enemy
  constructor: ->
    @angle = 0
    @goesToRight = Math.randomBoolean()
    super Setting.ENEMY.PANCAKE

  move: ->
    return unless @isAlive()
    unless @completedAppearance()
      @position.moveDown()
    else
      @angle += Setting.ENEMY.PANCAKE.SWING.SPEED
      @position.moveDown Math.sinBy(@angle) * Setting.ENEMY.PANCAKE.SWING.RANGE
      if @goesToRight then @moveRight() else @moveLeft()

  completedAppearance: ->
    0 < @position.topY()

  moveRight: ->
    @position.moveRight()
    @goesToRight = false if @position.isRightEnd()

  moveLeft: ->
    @position.moveLeft()
    @goesToRight = true if @position.isLeftEnd()
