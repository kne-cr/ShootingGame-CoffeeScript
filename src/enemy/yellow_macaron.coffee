class YellowMacaron extends Enemy
  constructor: ->
    super Setting.ENEMY.YELLOW_MACARON

  move: ->
    # ランダム移動
    # 左右
    if Math.randomBoolean() then @position.moveLeft() else @position.moveRight()
    # 下
    @position.moveDown() if Math.randomBoolean()