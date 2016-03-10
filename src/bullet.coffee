# 弾クラス
class Bullet extends Solid
  constructor: (x, y, speed) ->
    @style = "rgb(255, 255, 255)"
    super new Position(x, y, 1, 20, speed), true

  move: ->
    @position.up()

  reset: (position) ->
    @position.x = position.center_x()
    @position.y = position.top_y()
    @is_dead = false