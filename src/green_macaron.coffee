class GreenMacaron extends Enemy
  constructor: ->
    # trueの場合は右、falseの場合は左に移動
    HorizontallyReboundAbility.giveTo @
    super Setting.ENEMY.GREEN_MACARON

  move: ->
    @moveHorizontally()
    @position.moveDown()