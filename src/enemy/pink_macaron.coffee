class PinkMacaron extends Enemy
  constructor: ->
    super Setting.ENEMY.PINK_MACARON

  move: ->
    @position.moveDown()