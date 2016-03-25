class PancakeBullets
  constructor: ->
    @list = (new PancakeBullet for i in [0...Setting.ENEMY.PANCAKE.BULLET.COUNT])

  reset: ->
    bullet.clear() for bullet in @list

  shoot: (position) ->
    for bullet in @list
      unless bullet.isAlive()
        bullet.shoot position
        break

  behave: (player) ->
    for bullet in @list
      bullet.behave player