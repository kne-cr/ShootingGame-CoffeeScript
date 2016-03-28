class PancakeBullet extends Enemy
  constructor: ->
    super Setting.ENEMY.PANCAKE.BULLET

  move: ->
    @position.moveDown()

  shoot: (shooter) ->
    @position.moveTo shooter.centerX() - @position.width.half(), shooter.bottomY()
    @hitPoint = Setting.ENEMY.PANCAKE.BULLET.HIT_POINT