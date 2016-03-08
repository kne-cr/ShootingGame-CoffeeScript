# 弾クラス
class Bullet extends Solid
  constructor: (x, y, speed) ->
    @style = "rgb(255, 255, 255)"
    super new Position(x, y, 1, 20, speed), true

  move: ->
    @position.up()
    # 画面外に出た場合は死亡判定
    @is_dead = true if @position.bottom_y() < 0

  reset: (x, y) ->
    @position.x = x
    @position.y = y
    @is_dead = false