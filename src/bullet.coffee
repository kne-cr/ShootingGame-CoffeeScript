# 弾クラス
class Bullet extends Solid
  constructor: (speed) ->
    @style = "rgb(255, 255, 255)"
    super new Position(0, 0, 1, 20, speed), true

  move: ->
    @position.up()

  reset: (position) ->
    @position.x = position.center_x()
    @position.y = position.top_y()
    @is_dead = false