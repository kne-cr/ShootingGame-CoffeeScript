# 敵のリストクラス
class Enemies
  SPEED = 5
  # @appearance_rate -> 0..100で指定
  constructor: (@x_range, @count, @appearance_rate) ->
    @list = (new Enemy1(0, 0, SPEED) for i in [0...@count])

  action: ->
    @apear()
    @move()

  apear: ->
    return if @appearance_rate <= Math.random_number 100
    for enemy in @list
      if enemy.is_dead
        enemy.apear Math.random_number(@x_range)
        break

  move: ->
    for enemy in @list
      enemy.move()