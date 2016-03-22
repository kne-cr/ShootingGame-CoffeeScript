class Cookie extends Actor
  constructor: ->
    @exp = Setting.ENEMY.COOKIE.EXP
    @totalEXP = 0
    @image = new Image
    @image.src = Setting.ENEMY.COOKIE.IMAGE
    super new Position(0, 0, @image.width, @image.height, Setting.ENEMY.COOKIE.SPEED), false

  reset: ->
    @isAlive = false
    @totalEXP = 0

  move: ->
    @position.moveDown()

  die: ->
    @totalEXP += @exp
    @clear()

  comeBack: ->
    @position.x = Math.randomNumber(Setting.SCREEN.WIDTH)
    @position.y = 1 - @image.height
    @isAlive = true

  attack: (opponent) ->
    opponent.die() if @hits opponent