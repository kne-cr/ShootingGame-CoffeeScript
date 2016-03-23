class Pancake extends Enemy
  constructor: ->
    @angle = 0
    HorizontallyReboundAbility.giveTo @
    super Setting.ENEMY.PANCAKE

  move: ->
    return unless @isAlive()
    unless @completedAppearance()
      # 垂直に降りてきて登場
      @position.moveDown()
    else
      # 登場後は揺れながら動く
      @swingVertically()
      @moveHorizontally()

  completedAppearance: ->
    0 < @position.topY()

  swingVertically: ->
    @angle += Setting.ENEMY.PANCAKE.SWING.SPEED
    @position.moveDown Math.sinBy(@angle) * Setting.ENEMY.PANCAKE.SWING.RANGE
