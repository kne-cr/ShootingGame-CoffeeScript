# 敵1クラス
class Enemy1 extends Solid
  constructor: (x, y, speed) ->
    @image = new Image()
    @image.src = "img/enemy1.png"
    super(
      new Position(
        x - @image.width.half(),
        y - @image.height.half(),
        @image.width,
        @image.height,
        speed
      ),
      false
    )

  move: ->
    @position.down()