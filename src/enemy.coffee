class Enemy extends Actor
  constructor: (setting) ->
    @exp = setting.EXP
    @totalEXP = 0
    @image = new Image
    @image.src = setting.IMAGE
    super new Position(0, 0, @image.width, @image.height, setting.SPEED), false

  reset: ->
    @isAlive = false
    @totalEXP = 0

  move: ->

  die: ->
    @totalEXP += @exp
    @clear()

  comeBack: ->
    @position.x = Math.randomNumber(Setting.SCREEN.WIDTH)
    @position.y = 1 - @image.height
    @isAlive = true

  attack: (opponent) ->
    opponent.die() if @hits opponent