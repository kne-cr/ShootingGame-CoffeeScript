$("#start").click ->
  $(this).attr "disabled", true
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"
  player = new Player(main_screen.width.center(), main_screen.height - 50, 20)

  document.onkeydown = (key) ->
    player.instruct(key)

  document.onkeyup = (key) ->
    player.cancel(key)

  main = ->
    # 画面の削除
    context.clearRect 0, 0, main_screen.width, main_screen.height

    # プレイヤーの再描画
    player.action()
    context.drawImage player.image, player.x, player.y

    # 弾の再描画
    for bullet in player.bullets
      bullet.move()
      context.fillStyle = bullet.style
      context.fillRect bullet.left(), bullet.top(), bullet.width, bullet.height

    # 次のループへ
    setTimeout main, 20

  main()