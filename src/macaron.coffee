# 敵1クラス
class Macaron extends Enemy
  constructor: ->
    super Setting.ENEMY.MACARON

  move: ->
    # ランダム移動
    # 左右
    if Math.randomBoolean() then @position.moveLeft() else @position.moveRight()
    # 下
    @position.moveDown() if Math.randomBoolean()