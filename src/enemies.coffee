# 敵のリストクラス
class Enemies
  constructor: ->
    @list = (new Enemy1 for i in [0...Settings.ENEMY.COUNT])

  apear: ->
    # 出現率を下回った場合のみ敵を出現させる
    # 出現率70の場合、70を下回った場合出現、上回った場合は出現しない
    return if Settings.ENEMY.APPEARANCE_RATE < Math.random_number 100
    for enemy in @list
      unless enemy.is_alive
        enemy.come_back()
        break

  behave: (player) ->
    for enemy in @list
      enemy.move()
      enemy.attack player
      enemy.clear_offscreen()