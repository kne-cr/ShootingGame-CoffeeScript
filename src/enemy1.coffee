# 敵1クラス
class Enemy1 extends Solid
  constructor: (speed) ->
    @image = new Image
    @image.src = "img/enemy1.png"
    super new Position(0, 0, @image.width, @image.height, speed), false

  move: ->
    # ランダム移動
    # 左右
    if Math.random_boolean() then @position.left() else @position.right()
    # 下
    @position.down() if Math.random_boolean()

  come_back: (x) ->
    @position.x = x
    @position.y = 1 - @image.height
    @is_alive = true
