# 敵のリストクラス
class Enemies
  SPEED = 5
  # @appearance_rate -> 0..100で指定
  constructor: (@x_range, @count, @appearance_rate) ->
    @list = (new Enemy1(0, 0, SPEED) for i in [0...@count])

  apear: ->
    return if @appearance_rate <= Math.random() * 100
    for enemy in @list
      if enemy.is_dead
        enemy.position.x = Math.floor(Math.random() * @x_range)
        enemy.position.y = 0
        enemy.is_dead = false
        break