# 敵のリストクラス
class Enemies
  SPEED = 5
  constructor: (@x_range, @count) ->
    @list = (new Enemy1(0, 0, SPEED) for i in [0...@count])

  apear: ->
    for enemy in @list
      if enemy.is_dead
        enemy.position.x = Math.floor(Math.random() * @x_range)
        enemy.position.y = 0
        enemy.is_dead = false
        break