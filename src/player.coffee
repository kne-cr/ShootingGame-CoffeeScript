class Player
  KEY =
    SPACE: 32
    LEFT: 37
    UP: 38
    RIGHT: 39
    DOWN: 40

  constructor: (screen_width, screen_height, @speed) ->
    @image = new Image()
    @image.src = "img/player.png"
    @x = screen_width.center() - @image.width.center()
    @y = screen_height - @image.height - 20
    @pressed = new Array(240); # 240 = キーコードの最大値

  move: ->
    # if @pressed[KEY.SPACE]
    @x -= @speed if @pressed[KEY.LEFT]
    @y -= @speed if @pressed[KEY.UP]
    @x += @speed if @pressed[KEY.RIGHT]
    @y += @speed if @pressed[KEY.DOWN]

  instruct: (key) ->
    @pressed[key.keyCode] = true

  cancel: (key) ->
    @pressed[key.keyCode] = false