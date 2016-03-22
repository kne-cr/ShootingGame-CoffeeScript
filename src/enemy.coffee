class Enemy extends Actor
  constructor: (@setting) ->
    @totalEXP = 0
    @image = new Image
    @image.src = @setting.IMAGE
    @hitPoint = @setting.HIT_POINT
    super new Position(0, 0, @image.width, @image.height, @setting.SPEED), false

  reset: ->
    @isAlive = false
    @totalEXP = 0
    @hitPoint = @setting.HIT_POINT

  move: ->

  damage: ->
    console.log @hitPoint
    @hitPoint--
    if @hitPoint <= 0
      @totalEXP += @setting.EXP
      @clear()

  comeBack: ->
    @position.x = Math.randomNumber(Setting.SCREEN.WIDTH)
    @position.y = 1 - @image.height
    @hitPoint = @setting.HIT_POINT
    @isAlive = true

  attack: (opponent) ->
    opponent.damage() if @hits opponent