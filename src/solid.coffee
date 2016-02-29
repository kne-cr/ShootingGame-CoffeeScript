class Solid
  constructor: (@x, @y, @width, @height, @speed) ->

  left: ->
    @x

  right: ->
    @x + @width

  top: ->
    @y

  bottom: ->
    @y + @height

  center_x: ->
    (this.left() + this.right()).center()

  center_y: ->
    (this.top() + this.bottom()).center()

  move: ->