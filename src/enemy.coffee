class Enemy extends Actor
  constructor: (@setting) ->
    @totalEXP = 0
    @image = new Image
    @image.src = @setting.IMAGE
    super new Position(0, 0, @image.width, @image.height, @setting.SPEED), 0

  isBoss: ->
    false

  reset: ->
    @totalEXP = 0
    @hitPoint = 0
    @isDamaged = false

  damage: ->
    super
    unless @isAlive()
      @totalEXP += @setting.EXP
      @clear()

  comeBack: ->
    @position.moveTo Math.randomNumber(Setting.SCREEN.WIDTH), 1 - @image.height
    @hitPoint = @setting.HIT_POINT

  attack: (another) ->
    if @hits another
      another.damage()