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

  # 少しでも画面に入っていればtrueを返す
  is_in_screen: ->
    0 < @right_x() and
    @left_x() < Settings.SCREEN.WIDTH and
    0 < @bottom_y() and
    @top_y() < Settings.SCREEN.HEIGHT

  # 引数の図形と重なっている場合はtrueを返す
  overlaps: (another) ->
    @left_x() < another.right_x() and
    another.left_x() < @right_x() and
    @top_y() < another.bottom_y() and
    another.top_y() < @bottom_y()