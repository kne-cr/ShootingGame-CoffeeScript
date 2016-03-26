class PlayerBullets extends Bullets
  constructor: ->
    @list = (new PlayerBullet for i in [0...Setting.PLAYER.BULLET.COUNT])