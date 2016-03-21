# 物体クラス。位置情報と生死判定
class Actor
  constructor: (@position, @isAlive) ->

  clear: ->
    @isAlive = false

  hits: (another) ->
    @isAlive and
    another.isAlive and
    @position.overlaps another.position

  clearOffscreen: ->
    @clear() unless @position.isInScreen()