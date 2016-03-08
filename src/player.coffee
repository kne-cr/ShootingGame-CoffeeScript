# プレイヤークラス
class Player extends Solid
  constructor: (x, y, speed) ->
    @image = new Image()
    @image.src = "img/player.png"
    @bullets = new Bullets(10)
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

  left: ->
    @position.left()

  up: ->
    @position.up()

  right: ->
    @position.right()

  down: ->
    @position.down()

  shoot: ->
    @bullets.shoot @position.center_x(), @position.top_y()