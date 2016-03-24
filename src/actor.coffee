# 物体クラス。位置情報と生死判定
class Actor
  constructor: (@position, @hitPoint) ->
    # 点滅用 trueの間は画面に表示しない
    @isDamaged = false

  clear: ->
    @hitPoint = 0

  damage: ->
    @hitPoint--
    @isDamaged = true

  isAlive: ->
    0 < @hitPoint

  isActive: ->
    @isAlive() and not @isDamaged

  behave: (opponents) ->
    @isDamaged = false
    @move()
    @attack opponents
    @clearOffscreen()

  move: ->

  attack: (opponents) ->

  hits: (another) ->
    @isAlive() and
    another.isAlive() and
    @position.overlaps another.position

  clearOffscreen: ->
    @clear() unless @position.isInScreen()