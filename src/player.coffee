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
    @bullets = []
    super(
      x - @image.width.half(),
      y - @image.height.half(),
      @image.width,
      @image.height,
      speed
    )

  action: ->
    this.move()
    this.shoot()

  move: ->
    @x -= @speed if @pressed[KEY.LEFT]
    @y -= @speed if @pressed[KEY.UP]
    @x += @speed if @pressed[KEY.RIGHT]
    @y += @speed if @pressed[KEY.DOWN]

  shoot: ->
    if @pressed[KEY.SPACE]
      @bullets.push(new Bullet this.center_x(), this.top(), 20)

  instruct: (key) ->
    @pressed[key.keyCode] = true

  cancel: (key) ->
    @pressed[key.keyCode] = false