class Cookie extends Enemy
  constructor: ->
    super Setting.ENEMY.COOKIE

  move: ->
    @position.moveDown()