class PancakeBullets extends Bullets
  constructor: ->
    @list = (new PancakeBullet for i in [0...Setting.ENEMY.PANCAKE.BULLET.COUNT])

  shoot: (position) ->
    if Math.randomNumber(100) < Setting.ENEMY.PANCAKE.BULLET.SHOOT_RATE
      super position