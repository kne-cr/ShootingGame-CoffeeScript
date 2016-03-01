class Player extends Solid
  constructor: (x, y, speed) ->
    @image = new Image()
    @image.src = "img/player.png"
    @bullets = []
    super(
      x - @image.width.half(),
      y - @image.height.half(),
      @image.width,
      @image.height,
      speed
    )

  left: ->
    @x -= @speed

  up: ->
    @y -= @speed

  right: ->
    @x += @speed

  down: ->
    @y += @speed

  shoot: ->
    @bullets.push(new Bullet this.center_x(), this.top_y(), 20)