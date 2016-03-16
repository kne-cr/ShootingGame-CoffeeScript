# 弾のリストクラス。ファーストクラスコレクション設計
class Bullets
  SPEED = 20
  constructor: (@count) ->
    # forの戻り値が配列になるcoffeeっぽい書き方
    @list = (new Bullet SPEED for i in [0...@count])

  shoot: (position) ->
    for bullet in @list
      # 死亡判定されている弾があれば画面内に呼び戻し、復活させる
      unless bullet.is_alive
        bullet.reset position
        break
      # なければ、弾は撃てない

  behave: (opponents) ->
    @move()
    @attack opponents

  move: ->
    bullet.move() for bullet in @list

  attack: (opponents) ->
    bullet.attack opponents for bullet in @list