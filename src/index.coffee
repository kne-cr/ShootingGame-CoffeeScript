$("#start").click ->
  $(this).attr "disabled", true
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"
  player = new Player(main_screen.width.center(), main_screen.height - 50, 20)
  bullets = []

  document.onkeydown = (key) ->
    player.instruct(key)

  document.onkeyup = (key) ->
    player.cancel(key)

  main = ->
    # 移動
    player.move()

    # 画面の削除
    context.clearRect 0, 0, main_screen.width, main_screen.height

    # 画面の再描画
    context.drawImage player.image, player.x, player.y

    # 次のループへ
    setTimeout main, 20

  main()