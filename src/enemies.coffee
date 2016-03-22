# 敵のリストクラス
class Enemies
  constructor: ->
    @list = []
    @list.push(new Macaron) for i in [0...Setting.ENEMY.MACARON.COUNT]
    @list.push(new Cookie) for i in [0...Setting.ENEMY.COOKIE.COUNT]

  reset: ->
    enemy.reset() for enemy in @list

  totalEXP: ->
    (enemy.totalEXP for enemy in @list).reduce (a, b) ->
      a + b

  apear: ->
    # 出現率を下回った場合のみ敵を出現させる
    # 出現率70の場合、70を下回った場合出現、上回った場合は出現しない
    if Math.randomNumber(100) < Setting.ENEMY.APPEARANCE_RATE
      for enemy in @list
        unless enemy.isAlive
          enemy.comeBack()
          break

  behave: (player) ->
    for enemy in @list
      enemy.move()
      enemy.attack player
      enemy.clearOffscreen()