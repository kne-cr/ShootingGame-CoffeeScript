class PancakeBullet extends Enemy
  constructor: ->
    super Setting.ENEMY.PANCAKE.BULLET

  move: ->
    @position.moveDown()

  shoot: (shooter) ->
    @position.moveTo shooter.centerX() - @image.width.half(), shooter.bottomY()
    @hitPoint = Setting.ENEMY.PANCAKE.BULLET.HIT_POINT

  # 当たった場合、相手にダメージを与え自分は消える
  attack: (player) ->
    if @hits player
      player.damage()
      @clear()