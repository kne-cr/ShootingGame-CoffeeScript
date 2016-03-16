# 物体クラス。位置情報と生死判定
class Solid
  constructor: (@position, @is_alive) ->

  die: ->
    @is_alive = false

  hits: (another) ->
    @is_alive and
    another.is_alive and
    @position.overlaps another.position