Number::center = ->
  this / 2

KEY =
  SPACE: 32
  LEFT: 37
  UP: 38
  RIGHT: 39
  DOWN: 40

pressed = new Array(240); # 240 = キーコードの最大値

document.onkeydown = (key) ->
  pressed[key.keyCode] = true

document.onkeyup = (key) ->
  pressed[key.keyCode] = false

class Player
  constructor: (@speed) ->
    @image = new Image()
    @image.src = "img/player.png"
    @x = main_screen.width.center() - @image.width.center()
    @y = main_screen.height - @image.height - 20

  left: ->
    @x -= @speed

  right: ->
    @x += @speed

  up: ->
    @y -= @speed

  down: ->
    @y += @speed

  draw: ->
    context.drawImage @image, @x, @y

# ゲーム画面を初期化
init_screen = ->
  main_screen.width = 800
  main_screen.height = 500

clear_context = ->
  context.clearRect 0, 0, main_screen.width, main_screen.height

# ゲーム画面
main_screen = $("#screen")[0]
context = main_screen.getContext "2d"

$ ->
  init_screen()

$("#start").click ->
  main = ->
    if pressed[KEY.SPACE]

    else if pressed[KEY.LEFT]
      player.left()
    else if pressed[KEY.UP]
      player.up()
    else if pressed[KEY.RIGHT]
      player.right()
    else if pressed[KEY.DOWN]
      player.down()

    clear_context()
    player.draw()

    setTimeout main, 20

  $(this).attr "disabled", true
  player = new Player(20)
  main()