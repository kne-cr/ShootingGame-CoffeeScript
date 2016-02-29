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
    super(new Position(x - @image.width.half(), y - @image.height.half()), speed)

  center: ->
    new Position(@position.x + @image.width.half(), @position.y, + @image.height.half())

  action: ->
    this.move()
    this.shoot()

  move: ->
    @position.x -= @speed if @pressed[KEY.LEFT]
    @position.y -= @speed if @pressed[KEY.UP]
    @position.x += @speed if @pressed[KEY.RIGHT]
    @position.y += @speed if @pressed[KEY.DOWN]

  shoot: ->
      @bullets.push new Bullet this.center(), 20  if @pressed[KEY.SPACE]

  instruct: (key) ->
    @pressed[key.keyCode] = true

  cancel: (key) ->
    @pressed[key.keyCode] = false