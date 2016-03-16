# 弾クラス
class Bullet extends Solid
  constructor: (speed) ->
    @style = "rgb(255, 255, 255)"
    super new Position(0, 0, 1, 20, speed), false

  move: ->
    @position.up()

  reset: (position) ->
    @position.x = position.center_x()
    @position.y = position.top_y()
    @is_alive = true

  # 当たった場合、相手も倒して自分も消える
  attack: (opponents) ->
    for opponent in opponents when @hits opponent
      opponent.die()
      @die()