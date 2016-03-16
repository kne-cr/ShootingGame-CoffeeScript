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

  behave: (enemy_list) ->
    @move()
    @kill enemy_list

  move: ->
    bullet.move() for bullet in @list

  kill: (enemy_list) ->
    enemy.die() for enemy in enemy_list when @hits_to enemy

  hits_to: (other) ->
    @list.some (bullet) -> bullet.is_alive and bullet.hits_to other