# 弾のリストクラス。ファーストクラスコレクション設計
class Bullets
  SPEED = 20
  constructor: (@count) ->
    # forの戻り値が配列になるcoffeeっぽい書き方
    @list = (new Bullet(0, 0, SPEED) for i in [0...@count])

  shoot: (position) ->
    for bullet in @list
      # 死亡判定されている弾があれば画面内に呼び戻し、復活させる
      if bullet.is_dead
        bullet.reset position
        break
      # なければ、弾は撃てない

  action: ->
    bullet.move() for bullet in @list