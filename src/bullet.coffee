class Bullet extends Solid
  constructor: (x, y, speed) ->
    @style = "rgb(255, 255, 255)"
    super x, y, 1, 20, speed

  move: ->
    @y -= @speed