# 位置クラス。座標とか移動とか
class Position
  constructor: (@x, @y, @width, @height, @speed) ->

  # 移動
  left: ->
    @x -= @speed

  up: ->
    @y -= @speed

  right: ->
    @x += @speed

  down: ->
    @y += @speed

  # 端の座標
  left_x: ->
    @x

  right_x: ->
    @x + @width

  top_y: ->
    @y

  bottom_y: ->
    @y + @height

  # 真ん中の座標
  center_x: ->
    (@left_x() + @right_x()).center()

  center_y: ->
    (@top_y() + @bottom_y()).center()