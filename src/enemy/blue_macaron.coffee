class BlueMacaron extends Enemy
  constructor: ->
    super Setting.ENEMY.BLUE_MACARON

  move: ->
    @position.moveDown() if Math.randomBoolean() and Math.randomBoolean()