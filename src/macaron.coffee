# 敵1クラス
class Macaron extends Actor
  constructor: ->
    @exp = Setting.ENEMY.MACARON.EXP
    @totalEXP = 0
    @image = new Image
    @image.src = Setting.ENEMY.MACARON.IMAGE
    super new Position(0, 0, @image.width, @image.height, Setting.ENEMY.MACARON.SPEED), false

  reset: ->
    @isAlive = false
    @totalEXP = 0

  move: ->
    # ランダム移動
    # 左右
    if Math.randomBoolean() then @position.moveLeft() else @position.moveRight()
    # 下
    @position.moveDown() if Math.randomBoolean()

  die: ->
    @totalEXP += @exp
    @clear()

  comeBack: ->
    @position.x = Math.randomNumber(Setting.SCREEN.WIDTH)
    @position.y = 1 - @image.height
    @isAlive = true

  attack: (opponent) ->
    opponent.die() if @hits opponent