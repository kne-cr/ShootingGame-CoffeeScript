# 敵1クラス
class Enemy1 extends Solid
  constructor: (x, y, speed) ->
    @image = new Image
    @image.src = "img/enemy1.png"
    super(
      new Position(
        x - @image.width.half(),
        y - @image.height,
        @image.width,
        @image.height,
        speed
      ),
      true
    )

  move: ->
    # ランダム移動
    # 左右
    if Math.random_boolean() then @position.left() else @position.right()
    # 下
    @position.down() if Math.random_boolean()

  apear: (x) ->
    @position.x = x
    @position.y = 1 - @image.height
    @is_dead = false
