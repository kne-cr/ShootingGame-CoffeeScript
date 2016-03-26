class Pancake extends Enemy
  constructor: ->
    @angle = 0
    @appearanceFrame = Setting.ENEMY.PANCAKE.APPEARANCE_FRAME
    @bullets = new PancakeBullets
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

  reset: ->
    super
    @bullets.reset()

  completedAppearance: ->
    0 < @position.topY()

  swingVertically: ->
    @angle += Setting.ENEMY.PANCAKE.SWING.SPEED
    @position.moveDown Math.sinBy(@angle) * Setting.ENEMY.PANCAKE.SWING.RANGE

  comeBack: ->
    @position.moveTo (Setting.SCREEN.WIDTH - @image.width).center(), 1 - @image.height
    @hitPoint = @setting.HIT_POINT

  behave: (player) ->
    super(player)
    return unless @completedAppearance() and @isAlive()
    @bullets.shoot @position if Math.randomNumber(100) < Setting.ENEMY.APPEARANCE_RATE