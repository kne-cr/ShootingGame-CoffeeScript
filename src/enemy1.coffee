# 敵1クラス
class Enemy1 extends Solid
  constructor: (x, y, speed) ->
    @image = new Image()
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
    # Math.round(Math.random()) -> 0 or 1を取得
    # 1 -> true, 0 -> falseで判定される
    @position.left() if Math.round Math.random()
    @position.up() if Math.round Math.random()
    @position.right() if Math.round Math.random()
    @position.down() if Math.round Math.random()

    # 下には必ず移動する
    @position.down()

    # 画面外判定どうしよう