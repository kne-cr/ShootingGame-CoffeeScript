pressed = new Array(240); # 240 = キーコードの最大値

document.onkeydown = (key) ->
  pressed[key.keyCode] = true

document.onkeyup = (key) ->
  pressed[key.keyCode] = false

clear_context = ->
  context.clearRect 0, 0, main_screen.width, main_screen.height

# ゲーム画面
main_screen = $("#screen")[0]
context = main_screen.getContext "2d"

$("#start").click ->
  main = ->
    player.move()
    clear_context()
    player.draw()

    setTimeout main, 20

  $(this).attr "disabled", true
  player = new Player(20)
  main()