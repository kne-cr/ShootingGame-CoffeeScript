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

  # 引数の図形と重なっている場合はtrueを返す
  overlaps: (other) ->
    @left_x() < other.right_x() and
    other.left_x() < @right_x() and
    @top_y() < other.bottom_y() and
    other.top_y() < @bottom_y()