# 敵1クラス
class Enemy1 extends Solid
  constructor: ->
    @image = new Image
    @image.src = Settings.ENEMY.MACARON.IMAGE
    super new Position(0, 0, @image.width, @image.height, Settings.ENEMY.MACARON.SPEED), false

  move: ->
    # ランダム移動
    # 左右
    if Math.random_boolean() then @position.move_left() else @position.move_right()
    # 下
    @position.move_down() if Math.random_boolean()

  come_back: ->
    @position.x = Math.random_number(Settings.SCREEN.WIDTH)
    @position.y = 1 - @image.height
    @is_alive = true

  attack: (opponent) ->
    opponent.die() if @hits opponent