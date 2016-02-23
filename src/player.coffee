class Player
  KEY =
    SPACE: 32
    LEFT: 37
    UP: 38
    RIGHT: 39
    DOWN: 40

  constructor: (@speed) ->
    @image = new Image()
    @image.src = "img/player.png"
    @x = main_screen.width.center() - @image.width.center()
    @y = main_screen.height - @image.height - 20

  move: ->
    # if pressed[KEY.SPACE]
    @x -= @speed if pressed[KEY.LEFT]
    @y -= @speed if pressed[KEY.UP]
    @x += @speed if pressed[KEY.RIGHT]
    @y += @speed if pressed[KEY.DOWN]

  draw: ->
    context.drawImage @image, @x, @y