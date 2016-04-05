# 物体クラス。位置情報と生死判定
class Actor
  constructor: (@position, @hitPoint) ->
    # 点滅用 trueの間は画面に表示しない
    @isDamaged = false

  reset: ->

  hide: ->
    @hitPoint = 0

  takeDamage: ->
    @hitPoint--
    @isDamaged = true

  isAlive: ->
    0 < @hitPoint

  isActive: ->
    @isAlive() and not @isDamaged

  behave: (another) ->
    @isDamaged = false
    @move()
    @attack another
    @hideOffscreen()

  move: ->

  attack: (another) ->

  hits: (another) ->
    @isAlive() and
    another.isAlive() and
    @position.overlaps another.position

  hideOffscreen: ->
    @hide() unless @position.isInScreen()