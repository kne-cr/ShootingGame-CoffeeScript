class Player extends Solid
  KEY =
    SPACE: 32
    LEFT: 37
    UP: 38
    RIGHT: 39
    DOWN: 40

  constructor: (x, y, speed) ->
    @image = new Image()
    @image.src = "img/player.png"
    @pressed = new Array(240); # 240 = キーコードの最大値
    super(x - @image.width.center(), y - @image.height.center(), speed)

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