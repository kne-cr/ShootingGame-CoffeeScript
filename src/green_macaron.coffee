class GreenMacaron extends Enemy
  constructor: ->
    HorizontallyReboundAbility.giveTo @
    super Setting.ENEMY.GREEN_MACARON

  move: ->
    @moveHorizontally()
    @position.moveDown()