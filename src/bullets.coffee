# 弾のリストクラス。ファーストクラスコレクション設計
class Bullets
  constructor: ->
    # forの戻り値が配列になるcoffeeっぽい書き方
    @list = (new Bullet for i in [0...Settings.PLAYER.BULLET.COUNT])

  shoot: (position) ->
    for bullet in @list
      # 死亡判定されている弾があれば画面内に呼び戻し、復活させる
      unless bullet.is_alive
        bullet.reset position
        break
      # なければ、弾は撃てない

  behave: (opponents) ->
    for bullet in @list
      bullet.move()
      bullet.attack opponents