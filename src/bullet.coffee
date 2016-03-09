# 弾クラス
class Bullet extends Solid
  constructor: (x, y, speed) ->
    @style = "rgb(255, 255, 255)"
    super new Position(x, y, 1, 20, speed), true

  move: ->
    @position.up()

  reset: (x, y) ->
    @position.x = x
    @position.y = y
    @is_dead = false