# 弾クラス
class Bullet extends Actor
  constructor: ->
    @style = Settings.PLAYER.BULLET.STYLE
    super new Position(0, 0, Settings.PLAYER.BULLET.WIDTH, Settings.PLAYER.BULLET.HEIGHT, Settings.PLAYER.BULLET.SPEED), false

  move: ->
    @position.moveUp()

  reset: (position) ->
    @position.x = position.centerX()
    @position.y = position.topY()
    @isAlive = true

  # 当たった場合、相手も倒して自分も消える
  attack: (opponents) ->
    for opponent in opponents when @hits opponent
      opponent.die()
      @die()