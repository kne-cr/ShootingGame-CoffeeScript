class Pancake extends Enemy
  constructor: ->
    @angle = 0
    @appearanceFrame = Setting.ENEMY.PANCAKE.APPEARANCE_FRAME
    HorizontallyReboundAbility.giveTo @
    super Setting.ENEMY.PANCAKE

  isBoss: ->
    true

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
