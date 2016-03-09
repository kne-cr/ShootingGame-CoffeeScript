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
    @position.left() if Math.random_boolean()
    @position.up() if Math.random_boolean()
    @position.right() if Math.random_boolean()
    @position.down() if Math.random_boolean()

    # 下には必ず移動する
    @position.down()

  apear: (x) ->
    @position.x = x
    @position.y = 1 - @image.height
    @is_dead = false
