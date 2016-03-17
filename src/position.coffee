# 位置クラス。座標とか移動とか
class Position
  constructor: (@x, @y, @width, @height, @speed) ->

  # 移動
  moveLeft: ->
    @x -= @speed

  moveUp: ->
    @y -= @speed

  moveRight: ->
    @x += @speed

  moveDown: ->
    @y += @speed

  # 端の座標
  leftX: ->
    @x

  rightX: ->
    @x + @width

  topY: ->
    @y

  bottomY: ->
    @y + @height

  # 画面端にいる場合はtrueを返す
  isLeftEnd: ->
    @leftX() < 0

  isTopEnd: ->
    @topY() < 0

  isRightEnd: ->
    Setting.SCREEN.WIDTH < @rightX()

  isBottomEnd: ->
    Setting.SCREEN.HEIGHT < @bottomY()

  # 真ん中の座標
  centerX: ->
    (@leftX() + @rightX()).center()

  centerY: ->
    (@topY() + @bottomY()).center()

  # 少しでも画面に入っていればtrueを返す
  isInScreen: ->
    0 < @rightX() and
    @leftX() < Setting.SCREEN.WIDTH and
    0 < @bottomY() and
    @topY() < Setting.SCREEN.HEIGHT

  # 引数の図形と重なっている場合はtrueを返す
  overlaps: (another) ->
    @leftX() < another.rightX() and
    another.leftX() < @rightX() and
    @topY() < another.bottomY() and
    another.topY() < @bottomY()