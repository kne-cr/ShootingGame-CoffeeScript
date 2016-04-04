class Pancake extends Enemy
  constructor: ->
    @angle = new Angle Setting.ENEMY.PANCAKE.SWING.SPEED, Setting.ENEMY.PANCAKE.SWING.RANGE
    @untilAppearance = Setting.ENEMY.PANCAKE.APPEARANCE_FRAME
    @bullets = new PancakeBullets
    HorizontallyReboundAbility.giveTo @
    super Setting.ENEMY.PANCAKE

  isBoss: ->
    true

  move: ->
    return unless @isAlive()
    unless @isCompletedAppearance()
      # 垂直に降りてきて登場
      @position.moveDown()
    else
      # 登場後は揺れながら動く
      @swingVertically()
      @moveHorizontally()

  reset: ->
    super
    @untilAppearance = Setting.ENEMY.PANCAKE.APPEARANCE_FRAME
    @bullets.reset()

  isCompletedAppearance: ->
    0 < @position.topY()

  swingVertically: ->
    @position.moveDown @angle.nextSin()

  appear: ->
    @untilAppearance--
    @comeBack() if @untilAppearance is 0

  comeBack: ->
    @position.moveTo (Setting.SCREEN.WIDTH - @image.width).center(), 1 - @image.height
    @hitPoint = @setting.HIT_POINT

  behave: (player) ->
    super player
    return unless @isCompletedAppearance() and @isAlive()
    @bullets.shoot @position
    @bullets.behave player

  isKilled: ->
    0 < @totalEXP