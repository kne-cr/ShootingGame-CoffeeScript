# 敵のリストクラス
class Enemies
  constructor: ->
    @frameCount = 0
    @list = []
    @list.push(new YellowMacaron) for i in [0...Setting.ENEMY.YELLOW_MACARON.COUNT]
    @list.push(new BlueMacaron) for i in [0...Setting.ENEMY.BLUE_MACARON.COUNT]
    @list.push(new GreenMacaron) for i in [0...Setting.ENEMY.GREEN_MACARON.COUNT]
    @list.push(new PinkMacaron) for i in [0...Setting.ENEMY.PINK_MACARON.COUNT]
    @boss = new Pancake
    @list.push @boss

  reset: ->
    @frameCount = 0
    enemy.reset() for enemy in @list

  totalEXP: ->
    (enemy.totalEXP for enemy in @list).reduce (a, b) ->
      a + b

  apear: ->
    @frameCount++
    @boss.comeBack() if @frameCount is 2000
    # 出現率を下回った場合のみ敵を出現させる
    # 出現率70の場合、70を下回った場合出現、上回った場合は出現しない
    if Math.randomNumber(100) < Setting.ENEMY.APPEARANCE_RATE
      @list.sort -> Math.randomBoolean()
      for enemy in @list when enemy.isBoss() is no and enemy.isAlive() is no
        enemy.comeBack()
        break

  behave: (player) ->
    for enemy in @list
      enemy.move()
      enemy.attack player
      enemy.clearOffscreen()