class Bullet extends Solid
  constructor: (position, speed) ->
    @width = 1
    @height = 20
    @style = "rgb(255, 255, 255)"
    position.y - @height
    super position, speed

  move: ->
    @position.y -= @speed