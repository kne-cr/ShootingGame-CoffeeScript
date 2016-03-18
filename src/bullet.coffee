# 弾クラス
class Bullet extends Actor
  constructor: ->
    @style = Setting.PLAYER.BULLET.STYLE
    super new Position(0, 0, Setting.PLAYER.BULLET.WIDTH, Setting.PLAYER.BULLET.HEIGHT, Setting.PLAYER.BULLET.SPEED), false

  move: ->
    @position.moveUp()

  shoot: (position) ->
    @position.x = position.centerX()
    @position.y = position.topY()
    @isAlive = true

  # 当たった場合、相手も倒して自分も消える
  attack: (opponents) ->
    for opponent in opponents when @hits opponent
      opponent.die()
      @die()