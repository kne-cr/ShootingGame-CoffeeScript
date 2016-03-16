# 物体クラス。位置情報と生死判定
class Solid
  constructor: (@position, @is_alive) ->

  die: ->
    @is_alive = false

  hits_to: (other) ->
    @position.overlaps other.position