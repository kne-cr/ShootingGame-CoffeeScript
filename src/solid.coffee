# 物体クラス。位置情報と生死判定
class Solid
  constructor: (@position, @is_dead) ->

  die: ->
    @is_dead = true

  hits_to: (other) ->
    @position.overlaps other.position