# 敵1クラス
class Macaron extends Actor
  constructor: ->
    @image = new Image
    @image.src = Setting.ENEMY.MACARON.IMAGE
    super new Position(0, 0, @image.width, @image.height, Setting.ENEMY.MACARON.SPEED), false

  move: ->
    # ランダム移動
    # 左右
    if Math.randomBoolean() then @position.moveLeft() else @position.moveRight()
    # 下
    @position.moveDown() if Math.randomBoolean()

  comeBack: ->
    @position.x = Math.randomNumber(Setting.SCREEN.WIDTH)
    @position.y = 1 - @image.height
    @isAlive = true

  attack: (opponent) ->
    opponent.die() if @hits opponent