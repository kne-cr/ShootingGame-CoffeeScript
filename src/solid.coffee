class Solid
  constructor: (@x, @y, @width, @height, @speed) ->

  left_x: ->
    @x

  right_x: ->
    @x + @width

  top_y: ->
    @y

  bottom_y: ->
    @y + @height

  center_x: ->
    (this.left_x() + this.right_x()).center()

  center_y: ->
    (this.top_y() + this.bottom_y()).center()

  move: ->