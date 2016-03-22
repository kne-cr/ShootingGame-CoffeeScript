# 弾クラス
class Bullet extends Actor
  constructor: ->
    @style = Setting.PLAYER.BULLET.STYLE
    super new Position(
      0,
      0,
      Setting.PLAYER.BULLET.WIDTH,
      Setting.PLAYER.BULLET.HEIGHT,
      Setting.PLAYER.BULLET.SPEED
    ), 0

  move: ->
    @position.moveUp()

  shoot: (position) ->
    @position.x = position.centerX()
    @position.y = position.topY()
    @hitPoint = Setting.PLAYER.BULLET.HIT_POINT

  # 当たった場合、相手にダメージを与え自分は消える
  attack: (opponents) ->
    for opponent in opponents when @hits opponent
      opponent.damage()
      @clear()